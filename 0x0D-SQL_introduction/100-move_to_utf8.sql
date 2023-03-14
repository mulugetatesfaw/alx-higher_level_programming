-- changint to utf8
ALTER DATABASE hbtn_0c_0 CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- for table 
ALTER TABLE first_table CONVERT TO CHARACHTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- for field names
ALTER TABLE first_table CHANGE name VARCHAR(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
