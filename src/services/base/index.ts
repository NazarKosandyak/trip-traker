import Api from "@/api/api";
import { axiosApiBase } from "@/api";

class BaseService extends Api {
  // Add your methods here
}

export default new BaseService(axiosApiBase);
