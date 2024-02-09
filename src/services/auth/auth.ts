import { auth, db } from "@/services/auth/firebase-сonfig";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useAuthStore } from "@/store/useAuthStore";
import {
  signInErrorsHandler,
  signUpErrorsHandler,
} from "@/helpers/auth-errors";
import { IUserSignIn } from "@/types/auth.types";
import { notificationToast } from "@/helpers/notifications";
import { useRouter } from "vue-router";
import { doc, setDoc } from "firebase/firestore";
import { userFromCollection } from "@/helpers/auth-methods";

export const login = async (userData: IUserSignIn) => {
  const authStore = useAuthStore();
  try {
    const { email, password } = userData;
    await signInWithEmailAndPassword(auth, email, password);
    // get user data from collection
    const user = await userFromCollection(auth.currentUser?.uid);
    // set user data from collection
    await authStore.setUser(user);
    notificationToast("success", {
      title: `Hello, ${auth.currentUser?.email}`,
      message: "",
    });
  } catch (err: any) {
    signInErrorsHandler(err.code);
    throw new Error(err.code);
  }
};

export const register = async (userData: IUserSignIn) => {
  try {
    const { email, password } = userData;
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    await setDoc(doc(db, "users", user.uid), {
      ...userData,
      uid: user.uid,
      creationTime: user.metadata.creationTime,
      favoriteCoins: [""],
    });

    await notificationToast("success", {
      title: "Successfully",
      message: "Account successfully registered",
    });
  } catch (err: any) {
    signUpErrorsHandler(err.code);
    return;
  }
};
export const signInWithGoogle = async () => {
  const authStore = useAuthStore();
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    const user = auth.currentUser as any;
    const currentUserDoc = (await userFromCollection(user?.uid)) as any;

    const userData = {
      email: user.email,
      username: user.displayName,
      uid: user.uid,
      creationTime: user.metadata.creationTime,
      favoriteCoins: [""],
      ...currentUserDoc,
    };

    if (!currentUserDoc.uid) {
      await setDoc(doc(db, "users", user.uid), {
        userData,
      });
    }

    await authStore.setUser(userData);
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  const authStore = useAuthStore();
  await signOut(auth);
  authStore.clearUser();
};

export const fetchUser = () => {
  const authStore = useAuthStore();
  const router = useRouter();
  auth.onAuthStateChanged(async (user) => {
    if (user === null) {
      await logout();
      await authStore.clearUser();
    } else {
      const userCollection = await userFromCollection(user.uid);
      await authStore.setUser(userCollection);
      if (
        (router.isReady() as any) &&
        router.currentRoute.value.path.includes("auth")
      ) {
        router.push("/");
      }
      return userCollection;
    }
  });
};
