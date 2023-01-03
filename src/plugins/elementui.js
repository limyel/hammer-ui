import {ElButton, ElCol, ElForm, ElFormItem, ElIcon, ElInput, ElRow} from "element-plus";

export default (app) => {
    app.use(ElButton);
    app.use(ElForm);
    app.use(ElFormItem);
    app.use(ElIcon);
    app.use(ElInput);
    app.use(ElRow);
    app.use(ElCol);
}