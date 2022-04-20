-- DropForeignKey
ALTER TABLE "location" DROP CONSTRAINT "location_users_id_fkey";

-- AlterTable
ALTER TABLE "location" ALTER COLUMN "users_id" DROP NOT NULL;

-- CreateTable
CREATE TABLE "post" (
    "id" UUID NOT NULL,
    "text" VARCHAR(50) NOT NULL,
    "image" TEXT,
    "likes" INTEGER NOT NULL,
    "publish_date" TIMESTAMP(3),
    "users_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" UUID NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "post_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment" (
    "id" UUID NOT NULL,
    "message" VARCHAR(500),
    "publish_date" TIMESTAMP(3),
    "post_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "users_id" UUID,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "index_post_on_text" ON "post"("text");

-- CreateIndex
CREATE INDEX "index_post_on_image" ON "post"("image");

-- CreateIndex
CREATE INDEX "index_post_on_likes" ON "post"("likes");

-- CreateIndex
CREATE INDEX "index_post_on_publish_date" ON "post"("publish_date");

-- CreateIndex
CREATE INDEX "index_post_on_users_id" ON "post"("users_id");

-- CreateIndex
CREATE INDEX "index_post_on_created_at" ON "post"("created_at");

-- CreateIndex
CREATE INDEX "index_post_on_updated_at" ON "post"("updated_at");

-- CreateIndex
CREATE INDEX "index_tag_on_created_at" ON "tag"("created_at");

-- CreateIndex
CREATE INDEX "index_tag_on_name" ON "tag"("name");

-- CreateIndex
CREATE INDEX "index_tag_on_post_id" ON "tag"("post_id");

-- CreateIndex
CREATE INDEX "index_tag_on_updated_at" ON "tag"("updated_at");

-- CreateIndex
CREATE INDEX "index_comment_on_created_at" ON "comment"("created_at");

-- CreateIndex
CREATE INDEX "index_comment_on_post_id" ON "comment"("post_id");

-- CreateIndex
CREATE INDEX "index_comment_on_users_id" ON "comment"("users_id");

-- CreateIndex
CREATE INDEX "index_comment_on_updated_at" ON "comment"("updated_at");

-- CreateIndex
CREATE INDEX "index_location_on_users_id" ON "location"("users_id");

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
