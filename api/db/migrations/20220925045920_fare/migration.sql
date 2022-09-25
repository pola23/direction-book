-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Information" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "directionPostId" INTEGER NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "imageUrl" TEXT,
    "location" TEXT,
    "fare" REAL NOT NULL DEFAULT 0,
    CONSTRAINT "Information_directionPostId_fkey" FOREIGN KEY ("directionPostId") REFERENCES "DirectionPost" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Information" ("description", "directionPostId", "id", "imageUrl", "location", "title") SELECT "description", "directionPostId", "id", "imageUrl", "location", "title" FROM "Information";
DROP TABLE "Information";
ALTER TABLE "new_Information" RENAME TO "Information";
CREATE TABLE "new_DirectionPost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "feedbackId" INTEGER NOT NULL,
    "totalFare" REAL NOT NULL DEFAULT 0,
    CONSTRAINT "DirectionPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DirectionPost_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "Feedback" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DirectionPost" ("createdAt", "feedbackId", "id", "userId") SELECT "createdAt", "feedbackId", "id", "userId" FROM "DirectionPost";
DROP TABLE "DirectionPost";
ALTER TABLE "new_DirectionPost" RENAME TO "DirectionPost";
CREATE UNIQUE INDEX "DirectionPost_feedbackId_key" ON "DirectionPost"("feedbackId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
