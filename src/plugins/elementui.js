import {ElButton, ElCol, ElForm, ElFormItem, ElInput, ElRow, ElSwitch} from "element-plus";

export default (app) => {
    app.use(ElButton);
    app.use(ElSwitch);
    app.use(ElForm);
    app.use(ElFormItem);
    app.use(ElInput);
    app.use(ElRow);
    app.use(ElCol);
}