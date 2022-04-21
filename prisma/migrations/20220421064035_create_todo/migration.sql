-- CreateTable
CREATE TABLE "todo" (
    "id" UUID NOT NULL,
    "todo" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "users_id" UUID,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "index_todo_on_todo" ON "todo"("todo");

-- CreateIndex
CREATE INDEX "index_todo_on_users_id" ON "todo"("users_id");

-- CreateIndex
CREATE INDEX "index_todo_on_created_at" ON "todo"("created_at");

-- CreateIndex
CREATE INDEX "index_todo_on_updated_at" ON "todo"("updated_at");

-- AddForeignKey
ALTER TABLE "todo" ADD CONSTRAINT "todo_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
