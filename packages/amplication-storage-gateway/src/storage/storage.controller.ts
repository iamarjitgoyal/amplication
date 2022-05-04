import { Controller, Get, Param, Query } from "@nestjs/common";
import { FileMeta } from "./dto/FileMeta";
import {
  FilterOperator,
  Paginate,
  PaginateQuery,
  paginate,
  Paginated,
} from "nestjs-paginate";
import { sync, GlobSync } from "glob";
import { NodeTypeEnum } from "./dto/NodeTypeEnum";
import { StorageService } from "./storage.service";

const APP_ID_PARAM_KEY = "appId";
const BUILD_ID_PARAM_KEY = "buildId";

@Controller("storage")
export class StorageController {
  constructor(protected readonly service: StorageService) {}
  @Get(`/:${APP_ID_PARAM_KEY}/:${BUILD_ID_PARAM_KEY}/list`)
  getBuildFilesList(
    @Param(APP_ID_PARAM_KEY) appId: string,
    @Param(BUILD_ID_PARAM_KEY) buildId: string,
    @Query() query: PaginateQuery
  ): FileMeta[] {
    return this.service.getBuildFilesList(appId, buildId, query.path);
  }
}
