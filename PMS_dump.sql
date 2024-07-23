-- MySQL dump 10.13  Distrib 8.3.0, for macos14.2 (arm64)
--
-- Host: localhost    Database: parking_system
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `EnExInfo`
--

DROP TABLE IF EXISTS `EnExInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EnExInfo` (
  `EqNo` varchar(4) NOT NULL COMMENT '장비번호',
  `EnExDT` datetime NOT NULL COMMENT '입출차 일시',
  `CarNo` varchar(15) DEFAULT NULL COMMENT '차량번호',
  `TktNo` varchar(36) DEFAULT NULL COMMENT '주차권 번호',
  `EnExTypeID` tinyint NOT NULL COMMENT '입출차 구분',
  `TktTypeID` tinyint DEFAULT NULL COMMENT '주차권 구분',
  `TktMdTypeID` tinyint NOT NULL COMMENT '주차권 매체 구분',
  `FSTypeID` tinyint DEFAULT NULL COMMENT '요금체계 구분',
  `RcgEqNo` varchar(4) DEFAULT NULL COMMENT '차번인식 장비번호',
  `RcgDT` datetime DEFAULT NULL COMMENT '인식 일시',
  `UserID` varchar(8) DEFAULT NULL COMMENT '사용자 ID',
  `MkDT` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
  `ChDT` datetime NOT NULL COMMENT '변경 일시',
  PRIMARY KEY (`EqNo`,`EnExDT`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='입출차 정보 테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EnExInfo`
--

LOCK TABLES `EnExInfo` WRITE;
/*!40000 ALTER TABLE `EnExInfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `EnExInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EqInfo`
--

DROP TABLE IF EXISTS `EqInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EqInfo` (
  `EqNo` varchar(4) NOT NULL COMMENT '장비번호',
  `Name` varchar(8) NOT NULL COMMENT '이름',
  `AddrIP` varchar(15) NOT NULL COMMENT 'IP주소',
  `PortIP` smallint DEFAULT NULL COMMENT 'IP포트',
  `MngEqNo` varchar(4) DEFAULT NULL COMMENT '관리장비번호',
  `PLotID` tinyint NOT NULL COMMENT '주차장ID',
  `EqLocTypeID` tinyint NOT NULL COMMENT '장비위치구분',
  `SEqTypeID` smallint NOT NULL COMMENT '상세장비구분',
  `LocNo` tinyint NOT NULL COMMENT '위치번호',
  `OrdNo` tinyint DEFAULT NULL COMMENT '순번',
  `Used` tinyint NOT NULL COMMENT '사용여부',
  `ChDT` datetime NOT NULL COMMENT '변경일시',
  `MkDT` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일시',
  PRIMARY KEY (`EqNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='장비 정보 테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EqInfo`
--

LOCK TABLES `EqInfo` WRITE;
/*!40000 ALTER TABLE `EqInfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `EqInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ParkInfo`
--

DROP TABLE IF EXISTS `ParkInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ParkInfo` (
  `EntEqNo` varchar(4) NOT NULL COMMENT '입차장비번호',
  `EntDT` datetime NOT NULL COMMENT '입차 일시',
  `FSTypeID` tinyint NOT NULL COMMENT '요금체계 구분',
  `TktTypeID` tinyint NOT NULL COMMENT '주차권 구분',
  `TktNo` varchar(36) DEFAULT NULL COMMENT '주차권 번호',
  `CarNo` varchar(15) DEFAULT NULL COMMENT '차량번호',
  `RcgFName` varchar(64) NOT NULL COMMENT '인식 파일이름',
  `MkDT` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성 일시',
  PRIMARY KEY (`EntEqNo`,`EntDT`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='주차 정보 테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ParkInfo`
--

LOCK TABLES `ParkInfo` WRITE;
/*!40000 ALTER TABLE `ParkInfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `ParkInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RcgInfo`
--

DROP TABLE IF EXISTS `RcgInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RcgInfo` (
  `EqNo` varchar(4) NOT NULL COMMENT '장비번호',
  `RcgDT` datetime NOT NULL COMMENT '차번인식일시',
  `CarNo` varchar(15) NOT NULL COMMENT '차량번호',
  `RcgTypeID` tinyint NOT NULL COMMENT '차번인식구분',
  `RcgFName` varchar(64) DEFAULT NULL COMMENT '차번인식파일이름',
  `MkDT` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일시',
  PRIMARY KEY (`EqNo`,`RcgDT`,`CarNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='차번인식 정보 테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RcgInfo`
--

LOCK TABLES `RcgInfo` WRITE;
/*!40000 ALTER TABLE `RcgInfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `RcgInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SCInfo`
--

DROP TABLE IF EXISTS `SCInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SCInfo` (
  `CarNo` varchar(15) NOT NULL COMMENT '차량번호',
  `TktNo` varchar(36) DEFAULT NULL COMMENT '주차권번호',
  `SCUserID` smallint NOT NULL COMMENT '정기권그룹ID',
  `SCMdTypeID` tinyint NOT NULL COMMENT '정기권매체구분ID',
  `CarName` varchar(24) DEFAULT NULL COMMENT '차량이름',
  `Name` varchar(24) DEFAULT NULL COMMENT '사용자이름',
  `TEL` varchar(18) DEFAULT NULL COMMENT '전화번호',
  `Org` varchar(48) DEFAULT NULL COMMENT '소속',
  `Part` varchar(48) DEFAULT NULL COMMENT '부서(동)',
  `Pos` varchar(24) DEFAULT NULL COMMENT '직급(호)',
  `SCStTypeID` tinyint NOT NULL COMMENT '정기권상태구분ID',
  `UseBgnDT` datetime NOT NULL COMMENT '사용시작일시',
  `UseEndDT` datetime NOT NULL COMMENT '사용종료일시',
  `IsNoti` tinyint NOT NULL COMMENT '알림여부',
  `IsPLot` tinyint DEFAULT NULL COMMENT '주차여부',
  `LastEntDT` datetime DEFAULT NULL COMMENT '최종입차일시',
  `LastExtDT` datetime DEFAULT NULL COMMENT '최종출차일시',
  `Msg` varchar(32) DEFAULT NULL COMMENT '비고',
  `ShopID` varchar(8) DEFAULT NULL COMMENT '상점ID',
  `ChDT` datetime NOT NULL COMMENT '변경일시',
  `MkDT` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일시',
  PRIMARY KEY (`CarNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='정기권 정보 테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SCInfo`
--

LOCK TABLES `SCInfo` WRITE;
/*!40000 ALTER TABLE `SCInfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `SCInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SCIssInfo`
--

DROP TABLE IF EXISTS `SCIssInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SCIssInfo` (
  `EqNo` varchar(4) NOT NULL COMMENT '장비번호',
  `IssDT` datetime NOT NULL COMMENT '발급일시',
  `CarNo` varchar(15) NOT NULL COMMENT '차량번호',
  `TktNo` varchar(36) DEFAULT NULL COMMENT '주차권번호',
  `SCIssTypeID` tinyint NOT NULL COMMENT '정기권발급구분ID',
  `Signer` varchar(12) DEFAULT NULL COMMENT '발급자',
  `SignDate` date DEFAULT NULL COMMENT '발급일시',
  `UseBgnDT` datetime NOT NULL COMMENT '사용시작일시',
  `UseEndDT` datetime NOT NULL COMMENT '사용종료일시',
  `IssAmt` int NOT NULL COMMENT '발급금액',
  `PayTypeID` int DEFAULT NULL COMMENT '지불구분ID',
  `ShopID` varchar(8) DEFAULT NULL COMMENT '상점ID',
  `Msg` varchar(32) DEFAULT NULL COMMENT '비고',
  `User` varchar(8) DEFAULT NULL COMMENT '사용자',
  `MkDT` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일시',
  PRIMARY KEY (`EqNo`,`IssDT`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='정기권 발급 정보 테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SCIssInfo`
--

LOCK TABLES `SCIssInfo` WRITE;
/*!40000 ALTER TABLE `SCIssInfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `SCIssInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SCUserInfo`
--

DROP TABLE IF EXISTS `SCUserInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SCUserInfo` (
  `SCUserID` smallint NOT NULL COMMENT '정기권그룹ID',
  `Name` varchar(12) NOT NULL COMMENT '정기권그룹이름',
  `ParkSet` int DEFAULT NULL COMMENT '주차설정',
  `FSTypeID` tinyint DEFAULT NULL COMMENT '요금체계 구분',
  `Dscp` varchar(32) DEFAULT NULL COMMENT '설명',
  `ChDT` datetime NOT NULL COMMENT '변경일시',
  `MkDT` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일시',
  PRIMARY KEY (`SCUserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='정기권 그룹 정보 테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SCUserInfo`
--

LOCK TABLES `SCUserInfo` WRITE;
/*!40000 ALTER TABLE `SCUserInfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `SCUserInfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-18 17:12:29
