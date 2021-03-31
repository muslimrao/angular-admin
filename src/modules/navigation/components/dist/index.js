"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.components = void 0;
var breadcrumbs_component_1 = require("./breadcrumbs/breadcrumbs.component");
var dashboard_head_component_1 = require("./dashboard-head/dashboard-head.component");
var side_nav_item_component_1 = require("./side-nav-item/side-nav-item.component");
var table_heading_component_1 = require("./table-heading/table-heading.component");
var top_nav_user_component_1 = require("./top-nav-user/top-nav-user.component");
exports.components = [
    side_nav_item_component_1.SideNavItemComponent,
    breadcrumbs_component_1.BreadcrumbsComponent,
    dashboard_head_component_1.DashboardHeadComponent,
    top_nav_user_component_1.TopNavUserComponent,
    table_heading_component_1.TableHeadingComponent,
];
__exportStar(require("./side-nav-item/side-nav-item.component"), exports);
__exportStar(require("./breadcrumbs/breadcrumbs.component"), exports);
__exportStar(require("./dashboard-head/dashboard-head.component"), exports);
__exportStar(require("./top-nav-user/top-nav-user.component"), exports);
__exportStar(require("./table-heading/table-heading.component"), exports);
