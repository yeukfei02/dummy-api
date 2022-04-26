-- CreateTable
CREATE TABLE "cart" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "users_id" UUID,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" UUID NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "price" INTEGER,
    "discount_percentage" DECIMAL(65,30),
    "rating" DECIMAL(65,30),
    "stock" DECIMAL(65,30),
    "brand" TEXT,
    "category" TEXT,
    "thumbnail" TEXT,
    "images" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cart_id" UUID,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cart_users_id_key" ON "cart"("users_id");

-- CreateIndex
CREATE INDEX "index_cart_on_created_at" ON "cart"("created_at");

-- CreateIndex
CREATE INDEX "index_cart_on_updated_at" ON "cart"("updated_at");

-- CreateIndex
CREATE INDEX "index_cart_on_users_id" ON "cart"("users_id");

-- CreateIndex
CREATE INDEX "index_product_on_created_at" ON "product"("created_at");

-- CreateIndex
CREATE INDEX "index_product_on_title" ON "product"("title");

-- CreateIndex
CREATE INDEX "index_product_on_description" ON "product"("description");

-- CreateIndex
CREATE INDEX "index_product_on_price" ON "product"("price");

-- CreateIndex
CREATE INDEX "index_product_on_discount_percentage" ON "product"("discount_percentage");

-- CreateIndex
CREATE INDEX "index_product_on_rating" ON "product"("rating");

-- CreateIndex
CREATE INDEX "index_product_on_stock" ON "product"("stock");

-- CreateIndex
CREATE INDEX "index_product_on_brand" ON "product"("brand");

-- CreateIndex
CREATE INDEX "index_product_on_category" ON "product"("category");

-- CreateIndex
CREATE INDEX "index_product_on_thumbnail" ON "product"("thumbnail");

-- CreateIndex
CREATE INDEX "index_product_on_images" ON "product"("images");

-- CreateIndex
CREATE INDEX "index_product_on_updated_at" ON "product"("updated_at");

-- CreateIndex
CREATE INDEX "index_product_on_cart_id" ON "product"("cart_id");

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;
