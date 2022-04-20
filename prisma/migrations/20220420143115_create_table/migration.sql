-- CreateEnum
CREATE TYPE "Title" AS ENUM ('mr', 'ms', 'mrs', 'miss', 'dr');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'other');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "title" "Title" NOT NULL,
    "first_name" VARCHAR(50),
    "last_name" VARCHAR(50),
    "gender" "Gender" NOT NULL,
    "email" TEXT,
    "date_of_birth" TIMESTAMP(3),
    "register_date" TIMESTAMP(3),
    "phone" TEXT,
    "picture" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" UUID NOT NULL,
    "street" VARCHAR(100) NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "users_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

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
CREATE INDEX "index_users_on_created_at" ON "users"("created_at");

-- CreateIndex
CREATE INDEX "index_users_on_date_of_birth" ON "users"("date_of_birth");

-- CreateIndex
CREATE INDEX "index_users_on_email" ON "users"("email");

-- CreateIndex
CREATE INDEX "index_users_on_first_name" ON "users"("first_name");

-- CreateIndex
CREATE INDEX "index_users_on_gender" ON "users"("gender");

-- CreateIndex
CREATE INDEX "index_users_on_last_name" ON "users"("last_name");

-- CreateIndex
CREATE INDEX "index_users_on_phone" ON "users"("phone");

-- CreateIndex
CREATE INDEX "index_users_on_picture" ON "users"("picture");

-- CreateIndex
CREATE INDEX "index_users_on_register_date" ON "users"("register_date");

-- CreateIndex
CREATE INDEX "index_users_on_title" ON "users"("title");

-- CreateIndex
CREATE INDEX "index_users_on_updated_at" ON "users"("updated_at");

-- CreateIndex
CREATE INDEX "index_location_on_city" ON "location"("city");

-- CreateIndex
CREATE INDEX "index_location_on_country" ON "location"("country");

-- CreateIndex
CREATE INDEX "index_location_on_created_at" ON "location"("created_at");

-- CreateIndex
CREATE INDEX "index_location_on_state" ON "location"("state");

-- CreateIndex
CREATE INDEX "index_location_on_street" ON "location"("street");

-- CreateIndex
CREATE INDEX "index_location_on_timezone" ON "location"("timezone");

-- CreateIndex
CREATE INDEX "index_location_on_updated_at" ON "location"("updated_at");

-- CreateIndex
CREATE INDEX "index_location_on_users_id" ON "location"("users_id");

-- CreateIndex
CREATE INDEX "index_post_on_created_at" ON "post"("created_at");

-- CreateIndex
CREATE INDEX "index_post_on_image" ON "post"("image");

-- CreateIndex
CREATE INDEX "index_post_on_likes" ON "post"("likes");

-- CreateIndex
CREATE INDEX "index_post_on_publish_date" ON "post"("publish_date");

-- CreateIndex
CREATE INDEX "index_post_on_text" ON "post"("text");

-- CreateIndex
CREATE INDEX "index_post_on_updated_at" ON "post"("updated_at");

-- CreateIndex
CREATE INDEX "index_post_on_users_id" ON "post"("users_id");

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
CREATE INDEX "index_comment_on_message" ON "comment"("message");

-- CreateIndex
CREATE INDEX "index_comment_on_post_id" ON "comment"("post_id");

-- CreateIndex
CREATE INDEX "index_comment_on_publish_date" ON "comment"("publish_date");

-- CreateIndex
CREATE INDEX "index_comment_on_updated_at" ON "comment"("updated_at");

-- CreateIndex
CREATE INDEX "index_comment_on_users_id" ON "comment"("users_id");

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
