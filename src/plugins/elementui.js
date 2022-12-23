import {ElButton, ElForm, ElFormItem, ElIcon, ElInput} from "element-plus";

export default (app) => {
    app.use(ElButton);
    app.use(ElForm);
    app.use(ElFormItem);
    app.use(ElIcon);
    app.use(ElInput);
}