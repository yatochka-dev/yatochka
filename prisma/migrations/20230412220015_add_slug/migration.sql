/*
  Warnings:

  - You are about to drop the column `githubLink` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `githubPath` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "githubLink",
DROP COLUMN "image",
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "githubPath" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- DropTable
DROP TABLE "Example";

-- CreateIndex
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
