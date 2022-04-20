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
    "city" VARCHAR(30) NOT NULL,
    "state" VARCHAR(30) NOT NULL,
    "country" VARCHAR(30) NOT NULL,
    "timezone" VARCHAR(30) NOT NULL,
    "users_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
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
CREATE INDEX "index_location_on_street" ON "location"("street");

-- CreateIndex
CREATE INDEX "index_location_on_city" ON "location"("city");

-- CreateIndex
CREATE INDEX "index_location_on_state" ON "location"("state");

-- CreateIndex
CREATE INDEX "index_location_on_country" ON "location"("country");

-- CreateIndex
CREATE INDEX "index_location_on_timezone" ON "location"("timezone");

-- CreateIndex
CREATE INDEX "index_location_on_created_at" ON "location"("created_at");

-- CreateIndex
CREATE INDEX "index_location_on_updated_at" ON "location"("updated_at");

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
