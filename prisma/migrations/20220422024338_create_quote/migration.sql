-- CreateTable
CREATE TABLE "quote" (
    "id" UUID NOT NULL,
    "content" TEXT,
    "author" TEXT,
    "tags" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "index_quote_on_created_at" ON "quote"("created_at");

-- CreateIndex
CREATE INDEX "index_quote_on_content" ON "quote"("content");

-- CreateIndex
CREATE INDEX "index_quote_on_author" ON "quote"("author");

-- CreateIndex
CREATE INDEX "index_quote_on_tags" ON "quote"("tags");

-- CreateIndex
CREATE INDEX "index_quote_on_updated_at" ON "quote"("updated_at");
