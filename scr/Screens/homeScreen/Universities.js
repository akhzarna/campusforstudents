import { ActivityIndicator, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity, Alert, Modal, TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import styles from './UniversitiesStyle';
import Separator from '../../Components/Separator';
import FeeModal from '../filterModalScreens/FeeModal';
import CityModal from "./CityModal";
import MeritModal from "./MeritModal";
import RankingModal from "./RankingModal";
import DisciplineModal from "./DisciplineModal";
import AdmissionsModal from "./AdmissionsModal";
import StatusModal from "./StatusModal";
import Global from "./Global.js";

import { Linking } from 'react-native';

var dummy = [
  {
    "admissions": 1,
    "city": "Islamabad",
    "contact": "(051) 9252860",
    "country": "Pakistan",
    "deadline": "18-06-2022",
    "degree": "MBBS",
    "discipline": "Medical",
    "fee": 42620,
    "id": "pk0",
    "info": "info@mite.edu.pk",
    "key": 0,
    "logo": "https://www.fuuastisb.edu.pk/images/logonew.png",
    "map": {
      "address": " M3XC+79J, Kuri Model Village, Mozah Mohrian, 5B, near Bahria Enclave Road, G 7/1 G-7, Islamabad, Islamabad Capital Territory",
      "lat": 72.060284,
      "location": "Islamabad",
      "long": 34.66865,
      "placeid": ""
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 92,
    "province": "Punjab",
    "ranking": 47,
    "status": 1,
    "title": "Federal Urdu University of Arts, Sciences & Technology, Islamabad",
    "type": "University",
    "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
    "web": "http://www.uom.edu.pk/"
  },
  {
    "admissions": 1,
    "city": "Lahore",
    "contact": "(042) 99200572",
    "country": "Pakistan",
    "deadline": "18-06-2022",
    "degree": "MBBS",
    "discipline": "Medical",
    "fee": 42620,
    "id": "pk0",
    "info": "info@mite.edu.pk",
    "key": 1,
    "logo": "https://fjmu.punjab.gov.pk/sites/fjmu.punjab.gov.pk/themes/bootstrap/logo.png",
    "map": {
      "address": "Queen's Road, Mozang Chungi, Lahore, Punjab 54000",
      "lat": 72.060284,
      "location": "Lahore",
      "long": 34.66865,
      "placeid": ""
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 92,
    "province": "Punjab",
    "ranking": 82,
    "status": 1,
    "title": "Fatima Jinnah Medical University, Lahore",
    "type": "University",
    "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
    "web": "http://www.uom.edu.pk/"
  },
  {
    "admissions": 0,
    "city": "Karachi",
    "contact": "(021) 99231195",
    "country": "Pakistan",
    "deadline": "18-06-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 60000,
    "id": "pk0",
    "info": "info@mite.edu.pk",
    "key": 2,
    "logo": "https://www.emaan.edu.pk/wp-content/uploads/2022/01/Eman-Logo-04-01-400x69.png",
    "map": {
      "address": "Plot # A-2, Sector 28 Suparco Rd, Gulzar-e-Hijri Bilawal Shah Noorani Goth Gulzar E Hijri Scheme 33, Karachi, Sindh 75330",
      "lat": 72.060284,
      "location": "Karachi",
      "long": 34.66865,
      "placeid": ""
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Sindh",
    "ranking": 100000,
    "status": 1,
    "title": "Emaan Institute of Management & Sciences, Karachi",
    "type": "University",
    "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
    "web": "http://www.uom.edu.pk/"
  },
  {
    "admissions": 1,
    "city": "Karachi",
    "contact": "(021) 99231195",
    "country": "Pakistan",
    "deadline": "20-08-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 16000,
    "id": "pk0",
    "info": "info@mite.edu.pk",
    "key": 3,
    "logo": "https://duet.edu.pk/wp-content/uploads/2016/04/duet_logo.png",
    "map": {
      "address": "V2HX+F34, New M. A. Jinnah Rd, Jamshed Quarters Muslimabad, Karachi, Karachi City, Sindh 74800",
      "lat": 72.060284,
      "location": "Karachi",
      "long": 34.66865,
      "placeid": ""
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Sindh",
    "ranking": 90,
    "status": 1,
    "title": "Dawood University Of Engineering & Technology Karachi",
    "type": "University",
    "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
    "web": "http://www.uom.edu.pk/"
  },
  {
    "admissions": 0,
    "city": "Karachi",
    "contact": "(021) 34688333",
    "country": "Pakistan",
    "deadline": "15-07-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 40000,
    "id": "pk0",
    "info": "info@mite.edu.pk",
    "key": 4,
    "logo": "https://dadabhoy.edu.pk/wp-content/uploads/2019/05/logo_2.png",
    "map": {
      "address": "MVRF+J2X, Bunder Rd, Sukkur, Sindh",
      "lat": 72.060284,
      "location": "Karachi",
      "long": 34.66865,
      "placeid": ""
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Sindh",
    "ranking": 120,
    "status": 0,
    "title": "Dadabhoy Institute of Higher Education",
    "type": "University",
    "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
    "web": "http://www.uom.edu.pk/"
  },
  {
    "admissions": 0,
    "city": "Karachi",
    "contact": "(021) 111 113 847",
    "country": "Pakistan",
    "deadline": "15-07-2022",
    "degree": "BS (CS)",
    "discipline": "Medical",
    "fee": 134710,
    "id": "pk0",
    "info": "info@mite.edu.pk",
    "key": 5,
    "logo": "https://www.duhs.edu.pk/new/wp-content/uploads/2020/08/logo-400x90.png",
    "map": {
      "address": "Mission Rd, New Labour Colony Nanakwara, Karachi, Karachi City, Sindh 74200",
      "lat": 72.060284,
      "location": "Karachi",
      "long": 34.66865,
      "placeid": ""
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 60,
    "province": "Sindh",
    "ranking": 23,
    "status": 1,
    "title": "Dow University of Health Sciences (DUHS)",
    "type": "University",
    "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
    "web": "http://www.uom.edu.pk/"
  },
  {
    "admissions": 1,
    "city": "Karachi",
    "contact": "(021) 35244851",
    "country": "Pakistan",
    "deadline": "07-08-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 104550,
    "id": "pk0",
    "info": "info@mite.edu.pk",
    "key": 6,
    "logo": "http://www.dsu.edu.pk/wp-content/uploads/2019/03/logo.png",
    "map": {
      "address": "Ph-VII، DG-78, Off Khayaban-e-Tufail، Ext، Phase 7 Ext Karachi, Karachi City, Sindh 75500",
      "lat": 72.060284,
      "location": "Karachi",
      "long": 34.66865,
      "placeid": ""
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Sindh",
    "ranking": 101,
    "status": 0,
    "title": "DHA Suffa University",
    "type": "University",
    "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
    "web": "http://www.uom.edu.pk/"
  },
  {
    "admissions": 0,
    "city": "Karachi",
    "contact": "+92 21 34615357-9",
    "country": "Pakistan",
    "deadline": "01-08-2022",
    "degree": "BS (CS)",
    "discipline": "MBA",
    "fee": 51000,
    "id": "pk0",
    "info": "info@mite.edu.pk",
    "key": 7,
    "logo": "https://www.commecsinstitute.edu.pk/Content/Images/Header/Header.jpg",
    "map": {
      "address": "Gulistan-e-Jauhar - Malir Cantt Rd, Block 13 Gulistan-e-Johar, Karachi, Karachi City, Sindh 75420",
      "lat": 72.060284,
      "location": "Karachi",
      "long": 34.66865,
      "placeid": ""
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Sindh",
    "ranking": 172,
    "status": 1,
    "title": "Commecs Institute of Business & Emerging Sciences",
    "type": "University",
    "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
    "web": "http://www.uom.edu.pk/"
  },
  {
    "admissions": 0,
    "city": "Peshawar",
    "contact": "(091)2609501",
    "country": "Pakistan",
    "deadline": "01-08-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 160000,
    "id": "pk0",
    "info": "info@mite.edu.pk",
    "key": 8,
    "logo": "https://cityuniversity.edu.pk/wp-content/uploads/2021/06/cusit-logo-white-300x62.png",
    "map": {
      "address": "Dalazak Rd, Pakha Ghulam, Peshawar, Khyber Pakhtunkhwa",
      "lat": 72.060284,
      "location": "Peshawar",
      "long": 34.66865,
      "placeid": ""
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "KPK",
    "ranking": 68,
    "status": 0,
    "title": "City University of Science and Information Technology",
    "type": "University",
    "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
    "web": "http://www.uom.edu.pk/"
  },
  {
    "admissions": 1,
    "city": "Islamabad",
    "contact": "+92-51-111-555-666​​​​​​​​​",
    "country": "Pakistan",
    "deadline": "01-08-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 90000,
    "id": "pk0",
    "info": "info@mite.edu.pk",
    "key": 9,
    "logo": "https://cust.edu.pk/static/uploads/2018/05/CUSTblack.png",
    "map": {
      "address": " Islamabad Expressway, Kahuta، Road Zone-V Sihala, Islamabad, Islamabad Capital Territory",
      "lat": 72.060284,
      "location": "Islamabad",
      "long": 34.66865,
      "placeid": ""
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Punjab",
    "ranking": 94,
    "status": 0,
    "title": "Capital University of Science & Technology",
    "type": "University",
    "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
    "web": "http://www.uom.edu.pk/"
  },
  {
    "admissions": 1,
    "city": "Lahore",
    "contact": "042-38100156​​​​​​​​​",
    "country": "Pakistan",
    "deadline": "01-08-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 282500,
    "id": "pk0",
    "info": "info@mite.edu.pk",
    "key": 10,
    "logo": "https://www.bnu.edu.pk/bnu/Portals/0/bnuLogo.png",
    "map": {
      "address": "13 Km Off Thokar Niazbeg، Raiwand Rd, Beacon House Society, Lahore, Punjab 53700",
      "lat": 72.060284,
      "location": "Lahore",
      "long": 34.66865,
      "placeid": ""
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Punjab",
    "ranking": 81,
    "status": 0,
    "title": "Beaconhouse National University",
    "type": "University",
    "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
    "web": "http://www.uom.edu.pk/"
  },
  {
    "admissions": 0,
    "city": "Karachi",
    "contact": " (092-21)34410293​​​​​​​​​​",
    "country": "Pakistan",
    "deadline": "01-02-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 177500,
    "id": "pk0",
    "info": "info@mite.edu.pk",
    "key": 11,
    "logo": "http://baqai.edu.pk/images/header.jpg",
    "map": {
      "address": "Karachi",
      "lat": 72.060284,
      "location": "Karachi",
      "long": 34.66865,
      "placeid": ""
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 60,
    "province": "Sindh",
    "ranking": 98,
    "status": 0,
    "title": "Baqai Medical University",
    "type": "University",
    "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
    "web": "http://www.uom.edu.pk/"
  },
  {
    "admissions": 1,
    "city": "Quetta",
    "contact": " +92 (81) 111-717-111​",
    "country": "Pakistan",
    "deadline": "19-08-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 77000,
    "id": "pk0",
    "info": "info@mite.edu.pk",
    "key": 12,
    "logo": "https://www.buitms.edu.pk/Content/img/logo101.png",
    "map": {
      "address": "Airport Road، Baleli Road, Quetta, 87300",
      "lat": 72.060284,
      "location": "Balochistan",
      "long": 34.66865,
      "placeid": ""
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 60,
    "province": "Balochistan",
    "ranking": 145,
    "status": 1,
    "title": "Balochistan University of Information Technology, Engineering & Management Sciences (BUITEMS)",
    "type": "University",
    "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
    "web": "http://www.uom.edu.pk/"
  },
  {
    "admissions": 1,
    "city": "khuzdar",
    "contact": " +92 848 412834​​​​​​​​​​",
    "country": "Pakistan",
    "deadline": "31-08-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 16000,
    "id": "pk0",
    "info": "info@mite.edu.pk",
    "key": 13,
    "logo": "https://www.buetk.edu.pk/wp-content/uploads/2021/12/Logo-1.png",
    "map": {
      "address": "BUETK Cafe، Khuzdar, Balochistan 98100",
      "lat": 72.060284,
      "location": "Balochistan",
      "long": 34.66865,
      "placeid": ""
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 60,
    "province": "Balochistan",
    "ranking": 145,
    "status": 1,
    "title": "Balochistan University of Engineering & Technology",
    "type": "University",
    "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
    "web": "http://www.uom.edu.pk/"
  },
  {
    "admissions": 0,
    "city": "Karachi",
    "contact": "091-6540116​​​​​​​​​​",
    "country": "Pakistan",
    "deadline": "01-02-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 32530,
    "id": "pk0",
    "info": "info@mite.edu.pk",
    "key": 14,
    "logo": "https://bkuc.edu.pk/public/images/top_banner1.png",
    "map": {
      "address": "Bacha Khan College, Peshawar, Charsadda, Khyber",
      "lat": 72.060284,
      "location": "Charsadda",
      "long": 34.66865,
      "placeid": ""
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "KPK",
    "ranking": 114,
    "status": 1,
    "title": "Bacha khan University",
    "type": "University",
    "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
    "web": "http://www.uom.edu.pk/"
  },
  
  {
    "admissions": 1,
    "city": "Peshawar",
    "contact": "(+92) 911 111 2812 8",
    "country": "Pakistan",
    "deadline": "2-8-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 120000,
    "id": "pk47",
    "info": "admission.pwr@nu.edu.pk",
    "key": 93,
    "logo": "http://lhr.nu.edu.pk/static/campus/Images/logo.PNG",
    "map": {
      "address": "160 Industrial Estate,Hayatabad, Peshawar, Pakistan.",
      "lat": "74.2126341",
      "location": "Peshawar",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 60,
    "province": "KPK",
    "ranking": 93,
    "status": 0,
    "title": "National University of Computer & Emerging Sciences (FAST) Peshawar Campus",
    "type": "University",
    "url": "http://pwr.nu.edu.pk/",
    "web": "http://pwr.nu.edu.pk/"
  },
  {
    "admissions": 1,
    "city": "Karachi",
    "contact": "(+92-213) 410-0541-6",
    "country": "Pakistan",
    "deadline": "1-7-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 120000,
    "id": "pk47",
    "info": "admissions.khi@nu.edu.pk",
    "key": 94,
    "logo": "http://lhr.nu.edu.pk/static/campus/Images/logo.PNG",
    "map": {
      "address": "St-4 Sector 17-D On National Highway Karachi, Pakistan.",
      "lat": "74.2126341",
      "location": "Karachi",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 60,
    "province": "Sindh",
    "ranking": 93,
    "status": 0,
    "title": "National University of Computer & Emerging Sciences (FAST) Karachi Campus",
    "type": "University",
    "url": "https://khi.nu.edu.pk/",
    "web": "https://khi.nu.edu.pk/"
  },
  {
    "admissions": 1,
    "city": "Faisalabad",
    "contact": "(041) 111 128 128",
    "country": "Pakistan",
    "deadline": "1-7-2022",
    "degree": "BS (SE)",
    "discipline": "Computer Science",
    "fee": 128000,
    "id": "pk47",
    "info": "admissions.cfd@nu.edu.pk",
    "key": 95,
    "logo": "http://lhr.nu.edu.pk/static/campus/Images/logo.PNG",
    "map": {
      "address": "FAST-NU, FAST Square, 9 Km from Faisalabad Motorway Interchange towards Chiniot",
      "lat": "74.2126341",
      "location": "Chiniot",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 60,
    "province": "Punjab",
    "ranking": 93,
    "status": 0,
    "title": "FAST-NU, FAST Square, 9 Km from Faisalabad Motorway Interchange towards Chiniot",
    "type": "University",
    "url": "https://cfd.nu.edu.pk/",
    "web": "https://cfd.nu.edu.pk/"
  },
  {
    "admissions": 1,
    "city": "Lahore",
    "contact": "(042) 111 128 128",
    "country": "Pakistan",
    "deadline": "1-7-2022",
    "degree": "BS (SE)",
    "discipline": "Computer Science",
    "fee": 136000,
    "id": "pk47",
    "info": "admissions@lhr.nu.edu.pk",
    "key": 96,
    "logo": "http://lhr.nu.edu.pk/static/campus/Images/logo.PNG",
    "map": {
      "address": "Block-B, Faisal Town, Lahore.",
      "lat": "74.2126341",
      "location": "Lahore",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 60,
    "province": "Punjab",
    "ranking": 93,
    "status": 0,
    "title": "National University of Computer & Emerging Sciences (FAST) Lahore Campus",
    "type": "University",
    "url": "http://lhr.nu.edu.pk/",
    "web": "http://lhr.nu.edu.pk/"
  },
  {
    "admissions": 1,
    "city": "Islamabad",
    "contact": "(051) 111 128 128",
    "country": "Pakistan",
    "deadline": "1-7-2022",
    "degree": "BS (SE)",
    "discipline": "Computer Science",
    "fee": 136000,
    "id": "pk47",
    "info": "admissions.isb@nu.edu.pk",
    "key": 97,
    "logo": "http://lhr.nu.edu.pk/static/campus/Images/logo.PNG",
    "map": {
      "address": "FAST-House Rohtas Road, G-9/4 Islamabad - 44000",
      "lat": "74.2126341",
      "location": "Islamabad",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 60,
    "province": "Federal",
    "ranking": 93,
    "status": 0,
    "title": "National University of Computer & Emerging Sciences (FAST) Islamabad",
    "type": "University",
    "url": "http://isb.nu.edu.pk/",
    "web": "http://isb.nu.edu.pk/"
  },
  {
    "admissions": 0,
    "city": "Karachi",
    "contact": "(021) 111 111 487",
    "country": "Pakistan",
    "deadline": "30-7-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 26325,
    "id": "pk47",
    "info": "info@ivs.edu.pk",
    "key": 98,
    "logo": "https://www.indusvalley.edu.pk/new/public/front/images/svg/logo-black.svg",
    "map": {
      "address": "33rd St، Scheme 5، Block 2 Clifton, Karachi, 75600",
      "lat": "74.2126341",
      "location": "Karachi",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Sindh",
    "ranking": 115,
    "status": 0,
    "title": "Indus Valley School of Art & Architecture",
    "type": "University",
    "url": "https://www.indusvalley.edu.pk/home",
    "web": "https://www.indusvalley.edu.pk/home"
  },
  {
    "admissions": 0,
    "city": "Karachi",
    "contact": "(021) 34801430",
    "country": "Pakistan",
    "deadline": "29-7-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 14250,
    "id": "pk47",
    "info": "admission@indus.edu.pk",
    "key": 99,
    "logo": "https://www.indus.edu.pk/logo.png",
    "map": {
      "address": "ST-2D, Block-17, Gulshan-e-Iqbal, Adjacent to، National Stadium Rd, National Stadium Colony, Karachi, Karachi City, Sindh",
      "lat": "74.2126341",
      "location": "Karachi",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Sindh",
    "ranking": 92,
    "status": 0,
    "title": "Indus University",
    "type": "University",
    "url": "https://www.indus.edu.pk/",
    "web": "https://www.indus.edu.pk/"
  },
  {
    "admissions": 0,
    "city": "Lahore",
    "contact": "(042) 99046061",
    "country": "Pakistan",
    "deadline": "25-7-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 106500,
    "id": "pk47",
    "info": "admission@itu.edu.pk",
    "key": 100,
    "logo": "https://itu.edu.pk/wp-content/themes/itu/images/itu_logo.png",
    "map": {
      "address": "6th Floor، ARFA Tower, Ferozepur Rd, Nishtar Town, Lahore, Punjab",
      "lat": "74.2126341",
      "location": "Lahore",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Punjab",
    "ranking": 22,
    "status": 1,
    "title": "Information Technology University, Lahore",
    "type": "University",
    "url": "https://itu.edu.pk/",
    "web": "https://itu.edu.pk/"
  },
  {
    "admissions": 1,
    "city": "Lahore",
    "contact": "(042) 32590040",
    "country": "Pakistan",
    "deadline": "23-8-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 31250,
    "id": "pk47",
    "info": "info@iac.edu.pk",
    "key": 101,
    "logo": "https://iac.edu.pk/assets/images/Website-logo1.png",
    "map": {
      "address": "7.5Km from thokar niaz baig next to Govt. technical College, main Raiwind Rd, Bhobtian, Lahore, Punjab",
      "lat": "74.2126341",
      "location": "Lahore",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Punjab",
    "ranking": 7,
    "status": 0,
    "title": "Institute for Art and Culture",
    "type": "University",
    "url": "https://www.iac.edu.pk/",
    "web": "https://www.iac.edu.pk/"
  },
  {
    "admissions": 0,
    "city": "Karachi",
    "contact": "(021) 111 002 004",
    "country": "Pakistan",
    "deadline": "23-8-2022",
    "degree": "BBA (Honors)",
    "discipline": "Business Administration",
    "fee": 27250,
    "id": "pk47",
    "info": "enquiries@institutebm.org.za",
    "key": 102,
    "logo": "https://www.iobm.edu.pk/assets/images/logo-mob.png",
    "map": {
      "address": "Korangi Creek, Karachi, Karachi City, Sindh 75190",
      "lat": "74.2126341",
      "location": "Karachi",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Sindh",
    "ranking": 25,
    "status": 1,
    "title": "Institute of Business Administration",
    "type": "University",
    "url": "https://www.iobm.edu.pk/",
    "web": "https://www.iobm.edu.pk/"
  },
  {
    "admissions": 0,
    "city": "Karachi",
    "contact": "(021) 111 002 004",
    "country": "Pakistan",
    "deadline": "28-7-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 118750,
    "id": "pk47",
    "info": "enquiries@institutebm.org.za",
    "key": 103,
    "logo": "https://www.iobm.edu.pk/assets/images/logo-mob.png",
    "map": {
      "address": "Korangi Creek, Karachi, Karachi City, Sindh 75190",
      "lat": "74.2126341",
      "location": "Karachi",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Sindh",
    "ranking": 116,
    "status": 0,
    "title": "Institute of Business Management",
    "type": "University",
    "url": "https://www.iobm.edu.pk/",
    "web": "https://www.iobm.edu.pk/"
  },
  {
    "admissions": 0,
    "city": "Lahore",
    "contact": "(042) 111 191 938",
    "country": "Pakistan",
    "deadline": "29-3-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 75956,
    "id": "pk47",
    "info": "info@pakaims.edu.pk",
    "key": 104,
    "logo": "https://pakaims.edu.pk/wp-content/uploads/elementor/thumbs/IMS-Logo-blue-p5erw9sn5fpttnm8zowjyzv3e9ksit10h9cg1ikmy0.png",
    "map": {
      "address": "23، Block E 3 Gulberg III, Lahore, Punjab 54660",
      "lat": "74.2126341",
      "location": "Lahore",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Punjab",
    "ranking": 156,
    "status": 1,
    "title": "Institute of Management Sciences",
    "type": "University",
    "url": "https://pakaims.edu.pk/",
    "web": "https://pakaims.edu.pk/"
  },
  {
    "admissions": 1,
    "city": "Lahore",
    "contact": "042 111-707-808",
    "country": "Pakistan",
    "deadline": "17-07-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 65875,
    "id": "pk47",
    "info": "karachi@preston.edu.pk",
    "key": 189,
    "logo": "http://preston.edu.pk/images/logo.png",
    "map": {
      "address": "G86H+JC3, Service Rd, Abu Bakar Block Garden Town, Lahore, Punjab",
      "lat": "74.2126341",
      "location": "Lahore",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Punjab",
    "ranking": 63,
    "status": 0,
    "title": "Preston University, Lahore",
    "type": "University",
    "url": "http://preston.edu.pk/",
    "web": "http://preston.edu.pk/"
  },
  {
    "admissions": 1,
    "city": "Karachi",
    "contact": "021-111-707-808",
    "country": "Pakistan",
    "deadline": "17-07-2022",
    "degree": "BS (CS)",
    "discipline": "Computer Science",
    "fee": 65875,
    "id": "pk47",
    "info": "lahore@preston.edu.pk",
    "key": 190,
    "logo": "http://preston.edu.pk/images/logo.png",
    "map": {
      "address": "Main Campus 15، Shahrah-e-Faisal Rd, Bangalore Town Darwaish Colony, Karachi, Karachi City, Sindh 75350",
      "lat": "74.2126341",
      "location": "Karachi",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Sindh",
    "ranking": 63,
    "status": 0,
    "title": "Preston University, Karachi",
    "type": "University",
    "url": "http://preston.edu.pk/",
    "web": "http://preston.edu.pk/"
  },
  {
    "admissions": 0,
    "city": "Lahore",
    "contact": "0092 42 9933 2438",
    "country": "Pakistan",
    "deadline": "17-07-2022",
    "degree": "BS Electrical Technology",
    "discipline": "Electrical",
    "fee": 65875,
    "id": "pk47",
    "info": "info@ptut.edu.pk",
    "key": 191,
    "logo": "https://ptut.edu.pk/wp-content/uploads/2018/02/PTUT-1.jpg",
    "map": {
      "address": "Near Green Town Police station, Township, Lahore, Pakistan",
      "lat": "74.2126341",
      "location": "Lahore",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 70,
    "province": "Punjab",
    "ranking": 63,
    "status": 1,
    "title": "Punjab Tianjin University of Technology, Lahore",
    "type": "University",
    "url": "https://ptut.edu.pk/",
    "web": "https://ptut.edu.pk/"
  },
  {
    "admissions": 1,
    "city": "Mandi Bahauddin",
    "contact": "(0546) 553216",
    "country": "Pakistan",
    "deadline": "19-09-2022",
    "degree": "BS (SE)",
    "discipline": "Computer Science",
    "fee": 57000,
    "id": "pk47",
    "info": "registrar@putrasul.edu.pk",
    "key": 192,
    "logo": "https://www.putrasul.edu.pk/wp-content/uploads/2021/08/PUT-Logo_with_side_text__transparent_background.png",
    "map": {
      "address": "13-km Mandi Bahauddin - Sarai Alamgir Rd, Rasul, Mandi Bahauddin, Punjab",
      "lat": "74.2126341",
      "location": "Mandi Bahauddin",
      "long": "31.4027185",
      "placeid": "N/A"
    },
    "menu": [
      {
        "key": 0,
        "title": "Major",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 1,
        "title": "Scholarships",
        "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      },
      {
        "key": 2,
        "title": "Merit Calculator",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 3,
        "title": "Closing Merit",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 4,
        "title": "Reviews",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      },
      {
        "key": 5,
        "title": "Status",
        "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      }
    ],
    "merit": 50,
    "province": "Punjab",
    "ranking": 63,
    "status": 1,
    "title": "Punjab University of Technology, Rasul-Mandi Bahauddin",
    "type": "University",
    "url": "https://www.putrasul.edu.pk/",
    "web": "https://www.putrasul.edu.pk/"
  }
]

export default class Universities extends Component {
  constructor(props) {
    super(props)
    this.updatesState = this.updatesState.bind(this)
    this.SortByFee = this.SortByFee.bind(this)
    this.SortByCity = this.SortByCity.bind(this)
    this.SortByMerit = this.SortByMerit.bind(this)
    this.SortByRanking = this.SortByRanking.bind(this)
    this.SortByDiscipline = this.SortByDiscipline.bind(this)
    this.SortByAdmissions = this.SortByAdmissions.bind(this)
    this.SortByStatus = this.SortByStatus.bind(this)

    this.state = {
      studylevel: "Select the study level",
      discipline: "Select discipline",
      ranking: "Select Ranking",
      city: "Select City",
      status: "Status",
      admissions: "Admissions",
      min: '',
      max: '',
      merit: '',
      activityindicator: true,
      showFeeModal: false,
      showMeritModal: false,
      showCityModal: false,
      showRankingModal: false,
      showDisciplineModal: false,
      showAdmissionsModal: false,
      showStatusModal: false,
      filtersArray: [],
      universities: [],
      firestoreData: [],
      cloneArray:[],
      // fromFiltersScreen:this.props.route.params.filters,
      allFilters: [
        {
          title: "Discipline",
          status:-1,
          key:0,
        },{
          title: "City",
          status:-1,
          key:1,
        },{
          title: "Ranking", 
          status:-1,
          key:2,
        },{
          title: "Admissions",
          status:-1,
          key:3,
        },{ 
          title: "Status",
          status:-1,
          key:4,
        },{
          title: "Fee",
          status:-1,
          key:5,
        },{
          title: "Merit",
          status:-1,
          key:6,
        }
      ],
      finalFiltersArray:[],
      norecordfoundtext:'',
      norecordfoundsubtext:'',
    }
  }

  // setAllValues(allrecords){
  //   this.setState({universities: allrecords });
  //   this.setState({filtersArray: allrecords }, function () {
  //     this.state.cloneArray = this.state.universities;
  //     this.ApplyFiltersofHomeScreen();
  //   });
  // }

  componentDidMount() {
   

    // var newArr = [];
    // firestore()
    //   .collection('universities').get().then(querySnapshot => {
    //     querySnapshot.forEach(documentSnapshot => {
    //       newArr.push(documentSnapshot.data())
    //     })
    //   }).then(testing => {
    //     this.setState({ firestoreData: newArr });
    //     // console.log(this.state.firestoreData);
    //   })
    
    // this.setState({filtersArray:this.state.allUniversitiesDummyData});
    // this.setState({universities:this.state.allUniversitiesDummyData}, function () {
    //   this.state.cloneArray = this.state.universities;
    //   this.ApplyAllFilters();
    // });

    // this.setState({activityindicator:false});

    // this.ApplyAllFilters();
      // To call function on pop()
    
    // Old Logic

    // if(!this.props.route.params.fromAdvanceFilters){
    //   this.firstFetchAllRecords();
    // }

    // this.focusListener = this.props.navigation.addListener('focus', () => {
    //   console.log(' -- Always Call or Not -- ');
    //   this.setState({norecordfoundtext:'', norecordfoundsubtext:''});
    //   if(this.props.route.params.fromAdvanceFilters){       
    //     this.state.fromFiltersScreen=this.props.route.params.filters
    //     this.firstFetchAllRecords();
    //   }
    // });

    console.log('Global',global.filters);
    this.focusListener = this.props.navigation.addListener('focus', () => {
      console.log(' -- Always Call or Not -- ');
      this.setState({norecordfoundtext:'', norecordfoundsubtext:''});
      if(this.props.route.params.fromAdvanceFilters || this.props.route.params.fromHomeScreen){       
        this.props.route.params.fromAdvanceFilters=0;
        this.props.route.params.fromHomeScreen=0;
        this.firstFetchAllRecords();
      }
    });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  firstFetchAllRecords(){
    this.setState({activityindicator:true});
    
    
    

      this.setState({universities: dummy, filtersArray: dummy }, function () {
        this.state.cloneArray = this.state.universities;
        this.state.deepCloneArray = this.state.universities;
        this.ApplyAllFilters();
      });

  }

  ApplyAllFilters(){
    // if(this.props.route.params.fromAdvanceFilters==1){
      // console.log('from Advance Filters -- Screen is =',this.state.fromFiltersScreen)
      // console.log('from Advance Filters -- Screen is =',this.props.route.params.filters)
      // this.props.route.params.fromAdvanceFilters=0;
      // this.setState({filtersArray:[]});
      // this.firstFetchAllRecords();
      // var allFilters = this.props.route.params.filters;
      this.setState({universities:[],filtersArray:[], norecordfoundtext:'', norecordfoundsubtext:''});
      if(global.filters.hasOwnProperty('discipline')){
        var afterFilters = this.state.cloneArray.filter((a) => a.discipline==global.filters.discipline)
        this.state.cloneArray=afterFilters;
        this.state.allFilters[0].status=1;
        // console.log('Check Status of allFilters is = ', this.state.allFilters);
      }
      if(global.filters.hasOwnProperty('city')){
        // console.log('city');
        var afterFilters = this.state.cloneArray.filter((a) => a.city==global.filters.city)
        this.state.cloneArray=afterFilters;
        this.state.allFilters[1].status=1;
      }
      if(global.filters.hasOwnProperty('ranking')){
        // console.log('ranking');
        var afterFilters = this.state.cloneArray.filter((a) => a.ranking<=Number(global.filters.ranking)).sort((a,b)=>a.ranking - b.ranking)
        this.state.cloneArray=afterFilters;
        this.state.allFilters[2].status=1;
      }
      if(global.filters.hasOwnProperty('admissions')){
        // console.log('admissions');
        var afterFilters = this.state.cloneArray.filter((a) => a.admissions==Number(global.filters.admissions))
        this.state.cloneArray=afterFilters;
        this.state.allFilters[3].status=1;
      }
      if(global.filters.hasOwnProperty('status')){
        // console.log('status');
        var afterFilters = this.state.cloneArray.filter((a) => a.status==Number(global.filters.status))
        this.state.cloneArray=afterFilters;
        this.state.allFilters[4].status=1;
      }
      if(global.filters.hasOwnProperty('min')){
        // console.log('min');
        var afterFilters = this.state.cloneArray.filter((a) => a.fee>=global.filters.min)
        this.state.cloneArray=afterFilters;
        this.state.allFilters[5].status=1;
      }
      if(global.filters.hasOwnProperty('max')){
        // console.log('max');
        var afterFilters = this.state.cloneArray.filter((a) => a.fee<=global.filters.max)
        this.state.cloneArray=afterFilters;
        this.state.allFilters[5].status=1;
      }
      if(global.filters.hasOwnProperty('merit')){
        // console.log('merit');
        var afterFilters = this.state.cloneArray.filter((a) => a.merit>=global.filters.merit)
        this.state.cloneArray=afterFilters;
        this.state.allFilters[6].status=1;
      }
      this.setState({universities:this.state.cloneArray}, function(){
        console.log('Total CS Records', this.state.universities.length);
        if(this.state.universities.length==0){
          this.setState({
            norecordfoundtext:'No Results Found', 
            norecordfoundsubtext:'We cannot find any item matching your search.',});
        }else{
          // console.log('Length is not zero');
          this.setState({
            norecordfoundtext:'', 
            norecordfoundsubtext:'',});
        }
      });


    // }else{
      // console.log('from Home Screen is =',this.props.route.params.filters)
      // var allFilters = this.props.route.params.filters;
      // if(this.state.fromFiltersScreen.hasOwnProperty('city')){
      //   var afterFilters = this.state.cloneArray.filter((a) => a.city==this.state.fromFiltersScreen.city)
      //   this.state.cloneArray=afterFilters;
      // }
      // if(this.state.fromFiltersScreen.hasOwnProperty('discipline')){
      //   var afterFilters = this.state.cloneArray.filter((a) => a.discipline==this.state.fromFiltersScreen.discipline)
      //   this.state.cloneArray=afterFilters;
      // }
      // if(this.state.fromFiltersScreen.hasOwnProperty('min')){
      //   var afterFilters = this.state.cloneArray.filter((a) => a.fee>=this.state.fromFiltersScreen.min)
      //   this.state.cloneArray=afterFilters;
      // }
      // if(this.state.fromFiltersScreen.hasOwnProperty('max')){
      //   var afterFilters = this.state.cloneArray.filter((a) => a.fee<=this.state.fromFiltersScreen.max)
      //   this.state.cloneArray=afterFilters;
      //     // console.log('clone Array is =', this.state.cloneArray.length);
      // }
      // this.setState({universities:this.state.cloneArray}, function(){
      //   console.log('Total CS Records', this.state.universities.length);
      //   if(this.state.universities.length==0){
      //     this.setState({
      //       norecordfoundtext:'No Results Found', 
      //       norecordfoundsubtext:'We cannot find any item matching your search.',});
      //   }else{
      //     this.setState({
      //       norecordfoundtext:'', 
      //       norecordfoundsubtext:'',});
      //   }
      // });
    // }

    var finalFiltersArray=[];
    var keyValue=-1;
    for (var KEYS in global.filters){
      keyValue++;
      var filterObject = {
        [KEYS]:global.filters[KEYS],
        title:KEYS,
        value:global.filters[KEYS],
        key:keyValue
      }
      finalFiltersArray.push(filterObject);
    }
    if(finalFiltersArray.length){
      // Add Last Object Clear All Filters
      keyValue++;
      var filterObject = {
        title:'Clear All',
        key:keyValue
      }
      finalFiltersArray.push(filterObject);
    }
    this.setState({finalFiltersArray:finalFiltersArray},()=>{
      // Change Value of Upper Filter Array
      // if(Object.keys(global.filters).length === 0){
        console.log('check')
        let allFiltersCloneArray = this.state.allFilters.map(element=>
          element.status===1 ? {...element, status:-1} : element
        );
        this.state.allFilters=allFiltersCloneArray
      // }

    })
    this.setState({activityindicator:false});
  }

  SortByFireStore() {
    this.setState({universities: this.state.firestoreData }, function(){
      if(this.state.universities.length==0){
        this.setState({
          norecordfoundtext:'No Results Found', 
          norecordfoundsubtext:'We cannot find any item matching your search.',});
      }else{
        this.setState({
          norecordfoundtext:'', 
          norecordfoundsubtext:'',});
      }
    })
  }

  SortByAdmission(item) {  
    // console.log(item)  
    this.setState({universities: this.state.filtersArray.sort((a, b) => b.admissions - a.admissions) }, function(){
      if(this.state.universities.length==0){
        this.setState({
          norecordfoundtext:'No Results Found', 
          norecordfoundsubtext:'We cannot find any item matching your search.',});
      }else{
        this.setState({
          norecordfoundtext:'', 
          norecordfoundsubtext:'',});
      }
    })
  }

  SortByFee(min, max) {
    
    console.log('globals is ?', global.filters);

    console.log('Is this ?', min);
    console.log('Is this ?', max);

    if(min.length){
      console.log('min main aya ?',min);
      global.filters.min=min;
      this.addNewFiltersIn('min');
    }
    if(max.length){
      console.log('max main aya ?',max);
      global.filters.max=max;
      this.addNewFiltersIn('max');
    }
    // console.log(max);
    // this.setState({universities: this.state.filtersArray.filter((item)=> item.fee>=min && item.fee<=max).sort((a,b)=>a.fee - b.fee) }, function(){
    //   if(this.state.universities.length==0){
    //     this.setState({
    //       norecordfoundtext:'No Results Found', 
    //       norecordfoundsubtext:'We cannot find any item matching your search.',});
    //   }else{
    //     this.setState({
    //       norecordfoundtext:'', 
    //       norecordfoundsubtext:'',});
    //   }
    // })

    this.setState({ showFeeModal: false })
  }

  SortByRanking(ranking) {
    console.log(ranking);
    global.filters.ranking=ranking;
    this.addNewFiltersIn('ranking');

    // this.setState({universities: this.state.filtersArray.sort((a, b) => a.ranking - b.ranking) }, function(){
    //   if(this.state.universities.length==0){
    //     this.setState({
    //       norecordfoundtext:'No Results Found', 
    //       norecordfoundsubtext:'We cannot find any item matching your search.',});
    //   }else{
    //     this.setState({
    //       norecordfoundtext:'', 
    //       norecordfoundsubtext:'',});
    //   }
    // })
    this.setState({ showRankingModal: false })
  }

  SortByDiscipline(discipline) {
    console.log(discipline);
    global.filters.discipline=discipline;
    this.addNewFiltersIn('discipline');

    // this.setState({universities: this.state.filtersArray.sort((a, b) => a.ranking - b.ranking) }, function(){
    //   if(this.state.universities.length==0){
    //     this.setState({
    //       norecordfoundtext:'No Results Found', 
    //       norecordfoundsubtext:'We cannot find any item matching your search.',});
    //   }else{
    //     this.setState({
    //       norecordfoundtext:'', 
    //       norecordfoundsubtext:'',});
    //   }
    // })
    this.setState({ showDisciplineModal: false })
  }

  SortByAdmissions(admissions) {
    console.log('admissions');
    global.filters.admissions=admissions;
    this.addNewFiltersIn('admissions');

    // this.setState({universities: this.state.filtersArray.sort((a, b) => a.ranking - b.ranking) }, function(){
    //   if(this.state.universities.length==0){
    //     this.setState({
    //       norecordfoundtext:'No Results Found', 
    //       norecordfoundsubtext:'We cannot find any item matching your search.',});
    //   }else{
    //     this.setState({
    //       norecordfoundtext:'', 
    //       norecordfoundsubtext:'',});
    //   }
    // })
    this.setState({ showAdmissionsModal: false })
  }

  SortByCity(cityName) {
    console.log(cityName);
    global.filters.city=cityName;
    this.addNewFiltersIn('city');

    // this.setState({universities: this.state.filtersArray.filter((a) => a.city==cityName) }, function(){
    //   if(this.state.universities.length==0){
    //     this.setState({
    //       norecordfoundtext:'No Results Found', 
    //       norecordfoundsubtext:'We cannot find any item matching your search.',});
    //   }else{
    //     this.setState({
    //       norecordfoundtext:'', 
    //       norecordfoundsubtext:'',});
    //   }
    // })
    this.setState({ showCityModal: false });
  }

  SortByMerit(merit) {
    console.log('merit call ho raha hai', merit);
    global.filters.merit=merit;
    this.addNewFiltersIn('merit');

    // this.setState({universities: this.state.filtersArray.filter((item)=> item.fee>=min && item.fee<=max).sort((a,b)=>a.fee - b.fee) }, function(){
    //   if(this.state.universities.length==0){
    //     this.setState({
    //       norecordfoundtext:'No Results Found', 
    //       norecordfoundsubtext:'We cannot find any item matching your search.',});
    //   }else{
    //     this.setState({
    //       norecordfoundtext:'', 
    //       norecordfoundsubtext:'',});
    //   }
    // })
    this.setState({ showMeritModal: false })
  }

  SortByStatus(status){
    console.log('merit call ho raha hai', status);
    global.filters.status=status;
    this.addNewFiltersIn('status');

    // this.setState({universities: this.state.filtersArray.sort((a, b) => b.status - a.status) }, function(){
    //   if(this.state.universities.length==0){
    //     this.setState({
    //       norecordfoundtext:'No Results Found', 
    //       norecordfoundsubtext:'We cannot find any item matching your search.',});
    //   }else{
    //     this.setState({
    //       norecordfoundtext:'', 
    //       norecordfoundsubtext:'',});
    //   }
    // })
    this.setState({ showStatusModal: false })
  }

  updatesState() {
    this.setState({ showCityModal: false })
    this.setState({ showFeeModal: false })
    this.setState({ showMeritModal: false })
    this.setState({ showRankingModal: false })
    this.setState({ showDisciplineModal: false })
    this.setState({ showAdmissionsModal: false })
    this.setState({ showStatusModal: false })
  }

  showMeritModal() {
    this.setState({ showMeritModal: true })
  }

  showFeeModal() {
    this.setState({ showFeeModal: true })
  }

  showCityModal() {
    this.setState({ showCityModal: true })
  }

  showRankingModal() {
    this.setState({ showRankingModal: true })
  }

  showDisciplineModal() {
    this.setState({ showDisciplineModal: true })
  }

  showAdmissionsModal() {
    this.setState({ showAdmissionsModal: true })
  }

  showStatusModal() {
    this.setState({ showStatusModal: true })
  }

  loadMore=()=>{
  
  }

  dialCall = (item) => {
    var  number=item.contact;
    //  console.log("Item is :",item)
     let phoneNumber = '';
     if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
     else {phoneNumber = `telprompt:${number}`; }
     Linking.openURL(phoneNumber);
  };

  email(item){
   Linking.openURL(`mailto:${item.info}`);
  }

  ApplyNewFilters(item){
    console.log('is this called ??');
    this.setState({ finalFiltersArray: this.state.finalFiltersArray.filter((a) => a!=item)}, function(){
      if(this.state.finalFiltersArray.length==1){
        this.setState({finalFiltersArray:[]});
      }
    });
    this.setState({universities:[], filtersArray:[], norecordfoundtext:'', norecordfoundsubtext:''});
    // this.firstFetchAllRecords();
    var allFilters = global.filters;
    delete allFilters[item.title];

    if(allFilters.hasOwnProperty('discipline')){
      var afterFilters = this.state.cloneArray.filter((a) => a.discipline==allFilters.discipline)
      this.state.cloneArray=afterFilters;
    }
    if(allFilters.hasOwnProperty('ranking')){
      var afterFilters = this.state.cloneArray.filter((a) => a.ranking<=Number(allFilters.ranking)).sort((a,b)=>a.ranking - b.ranking)
      this.state.cloneArray=afterFilters;
    }
    if(allFilters.hasOwnProperty('city')){
      var afterFilters = this.state.cloneArray.filter((a) => a.city==allFilters.city)
      this.state.cloneArray=afterFilters;
    }
    if(allFilters.hasOwnProperty('admissions')){
      var afterFilters = this.state.cloneArray.filter((a) => a.admissions==Number(allFilters.admissions))
      this.state.cloneArray=afterFilters;
    }
    if(allFilters.hasOwnProperty('status')){
      var afterFilters = this.state.cloneArray.filter((a) => a.status==Number(allFilters.status))
      this.state.cloneArray=afterFilters;
    }
    if(allFilters.hasOwnProperty('min')){
      var afterFilters = this.state.cloneArray.filter((a) => a.fee>=allFilters.min)
      this.state.cloneArray=afterFilters;
    }
    if(allFilters.hasOwnProperty('max')){
      var afterFilters = this.state.cloneArray.filter((a) => a.fee<=allFilters.max)
      this.state.cloneArray=afterFilters;
    }
    if(allFilters.hasOwnProperty('merit')){
      var afterFilters = this.state.cloneArray.filter((a) => a.merit>=allFilters.merit)
      this.state.cloneArray=afterFilters;
    }
    this.setState({universities:this.state.cloneArray}, function(){
      console.log('Total CS Records', this.state.universities.length);
    });
     // Change Value of Upper Filter Array
     let allFiltersCloneArray = this.state.allFilters.map(element=>
      element.title===this.capitalizeFirstLetter(item.title) ? {...element, status:-1} : element
    );
    console.log('allFilters setState');
    this.setState({allFilters:allFiltersCloneArray,activityindicator:false});
  }

  capitalizeFirstLetter(string) {
    switch(string){
      case 'min':
        return 'Fee';
      case 'max':
        return 'Fee';
      default:
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

  clearAllFilters(item){
    global.filters={}
    console.log('Clear all Filters = ',item);
    // console.log(item.title);
    let allFiltersCloneArray = this.state.allFilters.map(element=>
      element.status===1 ? {...element, status:-1} : element
    );
    this.setState({finalFiltersArray:[], activityindicator:true});
      
        this.setState({universities: dummy, filtersArray: dummy }, function () {
        console.log('allFilters setState');
        this.setState({allFilters:allFiltersCloneArray, activityindicator:false});
      });

  }

  deleteFilters(item){
    // console.log('Delete Filters');
    this.setState({activityindicator:true});
   

      this.setState({universities: snapshot.val(), filtersArray: snapshot.val()}, function () {
        this.state.cloneArray = this.state.universities
        this.state.deepCloneArray = this.state.universities
        this.ApplyNewFilters(item);
      });

  }
  
  smallFirstLetter(string) {
      return string.charAt(0).toLowerCase() + string.slice(1);
  }

  SortByFunction=(item)=>{
      console.log('Button Pressed',item);
      var mykey = this.smallFirstLetter(item.title);
      if(mykey=='discipline'){
        // global.filters[mykey]='Computer Science';
        this.showDisciplineModal();
      }else if(mykey=='city'){
        this.showCityModal();
        // global.filters[mykey]='Karachi';
      }else if(mykey=='ranking'){
        // global.filters[mykey]='100';
        this.showRankingModal();
      }else if(mykey=='admissions'){
        this.showAdmissionsModal();
        // global.filters[mykey]='1';
      }else if(mykey=='status'){
        this.showStatusModal();
        // global.filters[mykey]='1';
      }else if(mykey=='merit'){
        global.filters[mykey]=50;
        this.showMeritModal();
      }
      if(mykey=='fee'){
        this.showFeeModal();
        // console.log('fee');
        // global.filters.min='';
        console.log(global.filters);
      }
      if(mykey=='fee'){
        // console.log('fee');
        // global.filters.max='';
        // console.log(global.filters);
      }
      console.log(global.filters);
      // this.addNewFiltersIn(mykey);
      // newFiltersAdded.discipline='Computer Science';
      // console.log('Button Pressed',newFiltersAdded);
      // if(item.title == "Discipline"){
      //   //
      // }else if (item.title == "City") {
      //   this.showCityModal();
      // }else if (item.title == "Ranking") {
      //   this.SortByRanking();
      // }else if (item.title == "Admissions") {
      //   this.SortByAdmission(item);
      // }else if (item.title == "Status") {
      //   this.SortByStatus();
      // }else if (item.title == "Fee") {
      //   this.showFeeModal();
      // }else if (item.title == "Merit") {
      //   //
      // }
  }

  addNewFiltersIn(item){
      // console.log('item is ==',item);
      // console.log('Clone Array Length is = ',this.state.cloneArray.length);      
      // console.log('global.filters',global.filters);
      // global.filters.hasOwnProperty
      this.state.cloneArray = this.state.deepCloneArray
      if(global.filters.hasOwnProperty('discipline')){
        // console.log('discipline');
        var afterFilters = this.state.cloneArray.filter((a) => a.discipline==global.filters.discipline)
        this.state.cloneArray=afterFilters;
        this.state.allFilters[0].status=1;
      }
      if(global.filters.hasOwnProperty('city')){
        // console.log('city');
        var afterFilters = this.state.cloneArray.filter((a) => a.city==global.filters.city)
        this.state.cloneArray=afterFilters;
        this.state.allFilters[1].status=1;
      }
      if(global.filters.hasOwnProperty('ranking')){
        // console.log('ranking');
        var afterFilters = this.state.cloneArray.filter((a) => a.ranking<=Number(global.filters.ranking)).sort((a,b)=>a.ranking - b.ranking)
        this.state.cloneArray=afterFilters;
        this.state.allFilters[2].status=1;
      }
      if(global.filters.hasOwnProperty('admissions')){
        // console.log('admissions');
        var afterFilters = this.state.cloneArray.filter((a) => a.admissions==Number(global.filters.admissions))
        this.state.cloneArray=afterFilters;
        this.state.allFilters[3].status=1;
      }
      if(global.filters.hasOwnProperty('status')){
        // console.log('status');
        var afterFilters = this.state.cloneArray.filter((a) => a.status==Number(global.filters.status))
        this.state.cloneArray=afterFilters;
        this.state.allFilters[4].status=1;
      }
      // if(item=='fee'){
      if(global.filters.hasOwnProperty('min')){
        console.log('min');
        var afterFilters = this.state.cloneArray.filter((a) => a.fee>=global.filters.min)
        this.state.cloneArray=afterFilters;
        this.state.allFilters[5].status=1;
      }
      if(global.filters.hasOwnProperty('max')){
        console.log('max');
        var afterFilters = this.state.cloneArray.filter((a) => a.fee<=global.filters.max)
        this.state.cloneArray=afterFilters;
        this.state.allFilters[5].status=1;
      }
    // }
      if(global.filters.hasOwnProperty('merit')){
        console.log('yes merit');
        var afterFilters = this.state.cloneArray.filter((a) => Number(a.merit)>=Number(global.filters.merit))
        this.state.cloneArray=afterFilters;
        this.state.allFilters[6].status=1;
      }
      this.setState({universities:afterFilters}, function(){
        console.log('Total CS Records', this.state.universities.length);
        if(this.state.universities.length==0){
          this.setState({
            norecordfoundtext:'No Results Found', 
            norecordfoundsubtext:'We cannot find any item matching your search.',});
        }else{
          // console.log('Length is not zero');
          this.setState({
            norecordfoundtext:'', 
            norecordfoundsubtext:'',});
        }
      });

    var finalFiltersArray=[];
    var keyValue=-1;
    for (var KEYS in global.filters){
      keyValue++;
      var filterObject = {
        [KEYS]:global.filters[KEYS],
        title:KEYS,
        value:global.filters[KEYS],
        key:keyValue
      }
      finalFiltersArray.push(filterObject);
    }
    if(finalFiltersArray.length){
      // Add Last Object Clear All Filters
      keyValue++;
      var filterObject = {
        title:'Clear All',
        key:keyValue
      }
      finalFiltersArray.push(filterObject);
    }
    this.setState({finalFiltersArray:finalFiltersArray},()=>{
      // console.log('Final Filters Array is === ',this.state.finalFiltersArray.length);
    })
    this.setState({activityindicator:false});

  }

  render() {
    const render_txt=(item)=>{
      switch(item.title){
        case "admissions":
          switch(item.value){
            case "1":
            return item.title.charAt(0).toUpperCase() + item.title.slice(1) + ': Open';
            case "0":
              return item.title.charAt(0).toUpperCase() + item.title.slice(1) + ': Closed';
          }
        case "status":
          switch(item.value){
            case "1":
            return item.title.charAt(0).toUpperCase() + item.title.slice(1) + ': Public';
            case "0":
              return item.title.charAt(0).toUpperCase() + item.title.slice(1) + ': Private';
          }
        case "Clear All":
          return item.title.charAt(0).toUpperCase() + item.title.slice(1);
        default:
          return item.title.charAt(0).toUpperCase() + item.title.slice(1) + ': ' + item.value;
      }
    }

      if(this.state.norecordfoundtext.length!='' && this.state.norecordfoundsubtext.length!='' && this.state.universities.length==0){
        // console.log('Return is Zero')
        return (
          <SafeAreaView style={styles.container}>
          <View style={styles.header} elevation={5}>
              <Text style={styles.headerTxt}>Total Institutes: {this.state.universities.length} </Text>
          </View>
            <View style={styles.filterWrapper}>
              <TouchableOpacity style={styles.filter} onPress={() => this.props.navigation.navigate("AdvanceFilter")}>
                <Text>Filters</Text>
              </TouchableOpacity>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.allFilters}
                renderItem={({ item }) => (
                  <View key={item.key} style={styles.singleFilter}>
                    {/* onPress={() => { this.setState({ show: true }) }} */}
                    <TouchableOpacity style={styles.filter} onPress={()=>this.SortByFunction(item)}>
                      <Text>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />

          </View>
          
          {this.state.finalFiltersArray.length?
          <View style={styles.appliedfiltersWrapper}>
              {/* <TouchableOpacity style={styles.filter} onPress={() => this.props.navigation.navigate("AdvanceFilter")}>
                <Text>Filters</Text>
              </TouchableOpacity> */}
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.finalFiltersArray}
                renderItem={({ item }) => (
                  <View key={item.key} style={styles.singleFilter}>
                    {/* onPress={() => { this.setState({ show: true }) }} */}
                    <TouchableOpacity style={styles.appliedfilters} onPress={
                      () => {
                      if (item.title == "Clear All") {
                        this.clearAllFilters(item);
                      }
                    }
                    }>
                      <Text style={{color:'white', fontSize:14, fontWeight:'bold', marginRight:10}}>
                        {/* {item.title.charAt(0).toUpperCase() + item.title.slice(1)}: {item.value} */}
                        {render_txt(item)}
                      </Text>
                    </TouchableOpacity>
                    
                    {(item.title=="Clear All")?(null):
                    <TouchableOpacity style={{
                      position: 'absolute',
                      right:0,
                      }}
                      onPress={() => {
                          // console.log('Console ',item.title);
                          this.deleteFilters(item);
                        }
                      }
                      >
                    <Image
                      style={{width: 22, height: 22}}
                      source={require("../../../assets/images/cross.png")}
                    />
                </TouchableOpacity>
                    }
                    
                  </View>
                )}
              />
          </View>
        :(null)}

            {this.state.activityindicator?
            (<View style={[styles.horizontal]}>
              <ActivityIndicator size="large" />
              </View>):
            (null)
            }
          
          <View style={{flex:0.60,flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:24, marginBottom:10}}>{this.state.norecordfoundtext}</Text>
            <Text style={{fontSize:16}}>{this.state.norecordfoundsubtext}</Text>
          </View>

            <FeeModal show={this.state.showFeeModal} update={this.updatesState} sortFilter={this.SortByFee} />
            <CityModal show={this.state.showCityModal} update={this.updatesState} sortCity={this.SortByCity} />
            <MeritModal show={this.state.showMeritModal} update={this.updatesState} sortFilter={this.SortByMerit} />
            <RankingModal show={this.state.showRankingModal} update={this.updatesState} sortFilter={this.SortByRanking} />
            <DisciplineModal show={this.state.showDisciplineModal} update={this.updatesState} sortFilter={this.SortByDiscipline} />
            <AdmissionsModal show={this.state.showAdmissionsModal} update={this.updatesState} sortFilter={this.SortByAdmissions} />
            <StatusModal show={this.state.showStatusModal} update={this.updatesState} sortFilter={this.SortByStatus} />
          </SafeAreaView>
        )
      }else{
        // console.log('Return is Not Zero')
        return (
          <SafeAreaView style={styles.container}>
          <View style={styles.header} elevation={5}>
              <Text style={styles.headerTxt}>Total Institutes: {this.state.universities.length} </Text>
          </View>
            <View style={styles.filterWrapper}>
              <TouchableOpacity style={styles.filter} onPress={() => this.props.navigation.navigate("AdvanceFilter")}>
                <Text>Filters</Text>
              </TouchableOpacity>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.allFilters}
                renderItem={({ item }) => (
                  <View key={item.key} style={styles.singleFilter}>
                    {/* onPress={() => { this.setState({ show: true }) }} */}
                    <TouchableOpacity style={(item.status==1)?styles.filterapplied:styles.filternotapplied} onPress={() => this.SortByFunction(item)}>
                      <Text>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
          </View>
          
          {this.state.finalFiltersArray.length?
          <View style={styles.appliedfiltersWrapper}>
              {/* <TouchableOpacity style={styles.filter} onPress={() => this.props.navigation.navigate("AdvanceFilter")}>
                <Text>Filters</Text>
              </TouchableOpacity> */}
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.finalFiltersArray}
                renderItem={({ item }) => (
                  <View key={item.key} style={styles.singleFilter}>
                    {/* onPress={() => { this.setState({ show: true }) }} */}
                    <TouchableOpacity style={styles.appliedfilters} onPress={
                      () => {
                      if (item.title == "Clear All") {
                        this.clearAllFilters(item);
                      }
                    }
                    }>
                      <Text style={{color:'white', fontSize:14, fontWeight:'bold', marginRight:10}}>
                        {/* {item.title.charAt(0).toUpperCase() + item.title.slice(1)}: {item.value} */}
                        {render_txt(item)}
                      </Text>
                    </TouchableOpacity>
                    
                    {(item.title=="Clear All")?(null):
                    <TouchableOpacity style={{
                      position: 'absolute',
                      right:0,
                      }}
                      onPress={() => {
                          // console.log('Console ',item.title);
                          this.deleteFilters(item);
                        }
                      }
                      >
                    <Image
                      style={{width: 22, height: 22}}
                      source={require("../../../assets/images/cross.png")}
                    />
                </TouchableOpacity>
                    }
                    
                  </View>
                )}
              />
          </View>
        :(null)}

            {this.state.activityindicator?
            (<View style={[styles.horizontal]}>
              <ActivityIndicator size="large" />
              </View>):
            (null)
            }
            
            <View style={styles.universitiesWrapper}>
              <FlatList
                data={this.state.universities}
                onEndReached={this.loadMore}
                renderItem={({ item }) => (
                  <View key={item.key} style={styles.singleUniversity} elevation={4}>
                    <View style={styles.rankingTextWrapper}>
                      {/* <Text style={styles.rankingText}>Ranking {item.ranking}</Text> */}
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('UniversityDetail', {obj:item})}>
                      <View style={{ flex: 0.85, flexDirection: "row" }}>
                        <View style={styles.imageWrapper} >
                          <Image
                            style={{ height: "75%", width: "100%", resizeMode:'contain', borderRadius: 50, marginLeft: 5 }}
                            source={{uri: item.logo,}}
                          />
                        </View>
                        <View style={styles.universityDetailWrapper}>
                          <Text style={[styles.universityDetailText, styles.usiversityName]}>{item.title}</Text>
                          <Text style={styles.universityDetailText}>Status: {item.status?'Public':'Private'}</Text>
                          <Text style={styles.universityDetailText}>Fee: {item.fee}</Text>
                          {/* <Text style={styles.universityDetailText}>Ranking: { item.ranking === 100000 ? "N/A": item.ranking } </Text> */}
                          <Text style={styles.universityDetailText}>Admission: {item.admissions?'Open':'Closed'}</Text>
                          {/* <Text style={styles.universityDetailText}>Merit: {item.merit}</Text> */}
                          <View style={styles.locAndPhoneWrapper}>
                          <Text style={styles.universityDetailText}>Location: {item.city}</Text>
                            {/* <Text style={styles.phone}>Phone</Text> */}
                          </View>
                          {/* <Text style={[styles.universityDetailText, styles.DeadlineText]}>Deadline : {item.deadline}</Text> */}
    
                          {/* <View style={{}}>
                              <TouchableOpacity onPress={() => this.email(item)} style={{flex:0.5}}>
                              <Text style={styles.linksStyles}>Email: {item.info}</Text>
                              </TouchableOpacity>
                           </View>
    
                          <View style={{}}>
                              <TouchableOpacity style={{flex:0.5}} onPress={() => this.dialCall(item)}>
                              <Text style={styles.linksStyles}>Phone: {item.contact}</Text>
                              </TouchableOpacity>
                           </View> */}
    
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              // ItemSeparatorComponent={() => <Separator />}
              />
            </View>
            <FeeModal show={this.state.showFeeModal} update={this.updatesState} sortFilter={this.SortByFee} />
            <CityModal show={this.state.showCityModal} update={this.updatesState} sortCity={this.SortByCity} />
            <MeritModal show={this.state.showMeritModal} update={this.updatesState} sortFilter={this.SortByMerit} />
            <RankingModal show={this.state.showRankingModal} update={this.updatesState} sortFilter={this.SortByRanking} />
            <DisciplineModal show={this.state.showDisciplineModal} update={this.updatesState} sortFilter={this.SortByDiscipline} />
            <AdmissionsModal show={this.state.showAdmissionsModal} update={this.updatesState} sortFilter={this.SortByAdmissions} />
            <StatusModal show={this.state.showStatusModal} update={this.updatesState} sortFilter={this.SortByStatus} />
          </SafeAreaView>
        )
      }
  }
}
