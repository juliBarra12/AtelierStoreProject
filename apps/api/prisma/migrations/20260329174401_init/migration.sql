-- CreateTable
CREATE TABLE "artworks" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "widthCm" INTEGER NOT NULL,
    "heightCm" INTEGER NOT NULL,
    "technique" TEXT NOT NULL,
    "collection" TEXT NOT NULL,
    "images" TEXT[],
    "available" BOOLEAN NOT NULL,
    "featured" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "artworks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "artworks_slug_key" ON "artworks"("slug");
