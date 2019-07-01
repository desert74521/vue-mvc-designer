import { DataAccess } from '../dao/PersonDao';
import { CommonModel } from '@/demo/common/CommonModel';
import PersonPage from '../model/PersonPage';
import { CommonService } from '@/demo/common/CommonService';
// 服务层
export default class Service extends CommonService {
    private dataAccess: DataAccess;
    constructor(model: CommonModel<PersonPage>) {
      super();
      this.dataAccess = new DataAccess(model);
    }

    public async requireAndRenderDataByPageNo(pageNo: number): Promise<any> {
      this.dataAccess.openMask();
      await this.dataAccess.requiredDataPageDataByPageNp(pageNo);
      this.dataAccess.closeMask();
    }
}

