"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210801121109 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210801121109 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "created_at" jsonb not null, "updated_at" timestamptz(0) not null, "title" text not null);');
    }
}
exports.Migration20210801121109 = Migration20210801121109;
//# sourceMappingURL=Migration20210801121109.js.map