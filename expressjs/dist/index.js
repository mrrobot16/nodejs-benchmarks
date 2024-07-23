"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
require("tsconfig-paths/register");
if (process.env.NODE_ENV !== 'production') {
    (0, dotenv_1.config)();
}
// Use the correct absolute path import based on tsconfig.json
const app_1 = require("./app");
const port = process.env.PORT || 3000;
app_1.app.listen(port, () => {
    console.log(`API available on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map