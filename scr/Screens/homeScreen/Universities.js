import { ActivityIndicator, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity, Alert, Modal, TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import styles from './UniversitiesStyle';
import Separator from '../../Components/Separator';
import FeeModal from '../filterModalScreens/FeeModal';
import CityModal from "./CityModal"
import database from '@react-native-firebase/database';
// import { firebase } from '@react-native-firebase/database';
import firestore from "@react-native-firebase/firestore"
import { DocumentSnapshot, QuerySnapshot } from '@firebase/firestore';
import { Linking } from 'react-native';

export default class Universities extends Component {
  constructor(props) {
    super(props)
    this.updatesState = this.updatesState.bind(this)
    this.SortByFee = this.SortByFee.bind(this)
    this.SortByCity = this.SortByCity.bind(this)
    this.state = {
      activityindicator: true,
      showFeeModal: false,
      showCityModal: false,
      filtersArray: [],
      universities: [],
      firestoreData: [],
      cloneArray:[],
      allFilters: [
        {
          title: "Admission",
          status:-1,
          key:0,
        },{
          title: "Fee",
          status:-1,
          key:1,
        },{
          title: "Ranking", 
          status:-1,
          key:2,
        },{
          title: "Location",
          status:-1,
          key:3,
        },{ 
          title: "Status",
          status:-1,
          key:4,
        }
      ],
      finalFiltersArray:[],
      norecordfoundtext:'',
      norecordfoundsubtext:'',
      // allUniversitiesDummyData : [
      //     {
      //       "admissions": 1,
      //       "city": "Lahore",
      //       "contact": "(051) 9252860",
      //       "country": "Pakistan",
      //       "deadline": "18-06-2022",
      //       "degree": "MBBS",
      //       "discipline": "Medical",
      //       "fee": 42620,
      //       "id": "pk0",
      //       "info": "info@mite.edu.pk",
      //       "key": 0,
      //       "logo": "https://www.fuuastisb.edu.pk/images/logonew.png",
      //       "map": {
      //         "address": "Islamabad",
      //         "lat": 72.060284,
      //         "location": "Islamabad",
      //         "long": 34.66865,
      //         "placeid": ""
      //       },
      //       "menu": [
      //         {
      //           "key": 0,
      //           "title": "Major",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 1,
      //           "title": "Scholarships",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 2,
      //           "title": "Merit Calculator",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 3,
      //           "title": "Closing Merit",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 4,
      //           "title": "Reviews",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 5,
      //           "title": "Status",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         }
      //       ],
      //       "merit": 92,
      //       "province": "Sindh",
      //       "ranking": 47,
      //       "status": 1,
      //       "title": "Federal Urdu University of Arts, Sciences & Technology",
      //       "type": "University",
      //       "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
      //       "web": "http://www.uom.edu.pk/"
      //     },
      //     {
      //       "admissions": 1,
      //       "city": "Islamabad",
      //       "contact": "(042) 99200572",
      //       "country": "Pakistan",
      //       "deadline": "18-06-2022",
      //       "degree": "MBBS",
      //       "discipline": "Medical",
      //       "fee": 42620,
      //       "id": "pk0",
      //       "info": "info@mite.edu.pk",
      //       "key": 1,
      //       "logo": "https://fjmu.punjab.gov.pk/sites/fjmu.punjab.gov.pk/themes/bootstrap/logo.png",
      //       "map": {
      //         "address": "Karachi",
      //         "lat": 72.060284,
      //         "location": "Karachi",
      //         "long": 34.66865,
      //         "placeid": ""
      //       },
      //       "menu": [
      //         {
      //           "key": 0,
      //           "title": "Major",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 1,
      //           "title": "Scholarships",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 2,
      //           "title": "Merit Calculator",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 3,
      //           "title": "Closing Merit",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 4,
      //           "title": "Reviews",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 5,
      //           "title": "Status",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         }
      //       ],
      //       "merit": 92,
      //       "province": "Sindh",
      //       "ranking": 82,
      //       "status": 1,
      //       "title": "Fatima Jinnah Medical University, Lahore",
      //       "type": "University",
      //       "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
      //       "web": "http://www.uom.edu.pk/"
      //     },
      //     {
      //       "admissions": 0,
      //       "city": "Karachi",
      //       "contact": "(021) 99231195",
      //       "country": "Pakistan",
      //       "deadline": "18-06-2022",
      //       "degree": "BS (CS)",
      //       "discipline": "Computer Science",
      //       "fee": 60000,
      //       "id": "pk0",
      //       "info": "info@mite.edu.pk",
      //       "key": 2,
      //       "logo": "https://www.emaan.edu.pk/wp-content/uploads/2022/01/Eman-Logo-04-01-400x69.png",
      //       "map": {
      //         "address": "Karachi",
      //         "lat": 72.060284,
      //         "location": "Karachi",
      //         "long": 34.66865,
      //         "placeid": ""
      //       },
      //       "menu": [
      //         {
      //           "key": 0,
      //           "title": "Major",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 1,
      //           "title": "Scholarships",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 2,
      //           "title": "Merit Calculator",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 3,
      //           "title": "Closing Merit",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 4,
      //           "title": "Reviews",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 5,
      //           "title": "Status",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         }
      //       ],
      //       "merit": 50,
      //       "province": "Sindh",
      //       "ranking": 100000,
      //       "status": 1,
      //       "title": "Emaan Institute of Management & Sciences, Karachi",
      //       "type": "University",
      //       "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
      //       "web": "http://www.uom.edu.pk/"
      //     },
      //     {
      //       "admissions": 1,
      //       "city": "Islamabad",
      //       "contact": "(021) 99231195",
      //       "country": "Pakistan",
      //       "deadline": "20-08-2022",
      //       "degree": "BS (CS)",
      //       "discipline": "Computer Science",
      //       "fee": 16000,
      //       "id": "pk0",
      //       "info": "info@mite.edu.pk",
      //       "key": 3,
      //       "logo": "https://duet.edu.pk/wp-content/uploads/2016/04/duet_logo.png",
      //       "map": {
      //         "address": "Karachi",
      //         "lat": 72.060284,
      //         "location": "Karachi",
      //         "long": 34.66865,
      //         "placeid": ""
      //       },
      //       "menu": [
      //         {
      //           "key": 0,
      //           "title": "Major",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 1,
      //           "title": "Scholarships",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 2,
      //           "title": "Merit Calculator",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 3,
      //           "title": "Closing Merit",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 4,
      //           "title": "Reviews",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 5,
      //           "title": "Status",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         }
      //       ],
      //       "merit": 50,
      //       "province": "Sindh",
      //       "ranking": 90,
      //       "status": 1,
      //       "title": "Dawood University of Engineering & Technology",
      //       "type": "University",
      //       "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
      //       "web": "http://www.uom.edu.pk/"
      //     },
      //     {
      //       "admissions": 0,
      //       "city": "Lahore",
      //       "contact": "(021) 34688333",
      //       "country": "Pakistan",
      //       "deadline": "15-07-2022",
      //       "degree": "BS (CS)",
      //       "discipline": "Computer Science",
      //       "fee": 40000,
      //       "id": "pk0",
      //       "info": "info@mite.edu.pk",
      //       "key": 4,
      //       "logo": "https://dadabhoy.edu.pk/wp-content/uploads/2019/05/logo_2.png",
      //       "map": {
      //         "address": "Karachi",
      //         "lat": 72.060284,
      //         "location": "Karachi",
      //         "long": 34.66865,
      //         "placeid": ""
      //       },
      //       "menu": [
      //         {
      //           "key": 0,
      //           "title": "Major",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 1,
      //           "title": "Scholarships",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 2,
      //           "title": "Merit Calculator",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 3,
      //           "title": "Closing Merit",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 4,
      //           "title": "Reviews",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 5,
      //           "title": "Status",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         }
      //       ],
      //       "merit": 50,
      //       "province": "Sindh",
      //       "ranking": 120,
      //       "status": 0,
      //       "title": "Dadabhoy institute of higher education",
      //       "type": "University",
      //       "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
      //       "web": "http://www.uom.edu.pk/"
      //     },
      //     {
      //       "admissions": 0,
      //       "city": "Karachi",
      //       "contact": "(021) 111 113 847",
      //       "country": "Pakistan",
      //       "deadline": "15-07-2022",
      //       "degree": "BS (CS)",
      //       "discipline": "Medical",
      //       "fee": 134710,
      //       "id": "pk0",
      //       "info": "info@mite.edu.pk",
      //       "key": 5,
      //       "logo": "https://www.duhs.edu.pk/new/wp-content/uploads/2020/08/logo-400x90.png",
      //       "map": {
      //         "address": "Karachi",
      //         "lat": 72.060284,
      //         "location": "Karachi",
      //         "long": 34.66865,
      //         "placeid": ""
      //       },
      //       "menu": [
      //         {
      //           "key": 0,
      //           "title": "Major",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 1,
      //           "title": "Scholarships",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 2,
      //           "title": "Merit Calculator",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 3,
      //           "title": "Closing Merit",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 4,
      //           "title": "Reviews",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 5,
      //           "title": "Status",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         }
      //       ],
      //       "merit": 60,
      //       "province": "Sindh",
      //       "ranking": 23,
      //       "status": 1,
      //       "title": "DOW University of Health Sciences",
      //       "type": "University",
      //       "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
      //       "web": "http://www.uom.edu.pk/"
      //     },
      //     {
      //       "admissions": 1,
      //       "city": "Karachi",
      //       "contact": "(021) 35244851",
      //       "country": "Pakistan",
      //       "deadline": "07-08-2022",
      //       "degree": "BS (CS)",
      //       "discipline": "Computer Science",
      //       "fee": 104550,
      //       "id": "pk0",
      //       "info": "info@mite.edu.pk",
      //       "key": 6,
      //       "logo": "http://www.dsu.edu.pk/wp-content/uploads/2019/03/logo.png",
      //       "map": {
      //         "address": "Karachi",
      //         "lat": 72.060284,
      //         "location": "Karachi",
      //         "long": 34.66865,
      //         "placeid": ""
      //       },
      //       "menu": [
      //         {
      //           "key": 0,
      //           "title": "Major",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 1,
      //           "title": "Scholarships",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 2,
      //           "title": "Merit Calculator",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 3,
      //           "title": "Closing Merit",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 4,
      //           "title": "Reviews",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 5,
      //           "title": "Status",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         }
      //       ],
      //       "merit": 50,
      //       "province": "Sindh",
      //       "ranking": 101,
      //       "status": 0,
      //       "title": "DHA Suffa University",
      //       "type": "University",
      //       "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
      //       "web": "http://www.uom.edu.pk/"
      //     },
      //     {
      //       "admissions": 0,
      //       "city": "Karachi",
      //       "contact": "+92 21 34615357-9",
      //       "country": "Pakistan",
      //       "deadline": "01-08-2022",
      //       "degree": "BS (CS)",
      //       "discipline": "MBA",
      //       "fee": 51000,
      //       "id": "pk0",
      //       "info": "info@mite.edu.pk",
      //       "key": 7,
      //       "logo": "https://www.commecsinstitute.edu.pk/Content/Images/Header/Header.jpg",
      //       "map": {
      //         "address": "Karachi",
      //         "lat": 72.060284,
      //         "location": "Karachi",
      //         "long": 34.66865,
      //         "placeid": ""
      //       },
      //       "menu": [
      //         {
      //           "key": 0,
      //           "title": "Major",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 1,
      //           "title": "Scholarships",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 2,
      //           "title": "Merit Calculator",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 3,
      //           "title": "Closing Merit",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 4,
      //           "title": "Reviews",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 5,
      //           "title": "Status",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         }
      //       ],
      //       "merit": 50,
      //       "province": "Sindh",
      //       "ranking": 172,
      //       "status": 1,
      //       "title": "Commecs Institute of Business & Emerging Sciences",
      //       "type": "University",
      //       "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
      //       "web": "http://www.uom.edu.pk/"
      //     },
      //     {
      //       "admissions": 0,
      //       "city": "Karachi",
      //       "contact": "(091)2609501",
      //       "country": "Pakistan",
      //       "deadline": "01-08-2022",
      //       "degree": "BS (CS)",
      //       "discipline": "Computer Science",
      //       "fee": 160000,
      //       "id": "pk0",
      //       "info": "info@mite.edu.pk",
      //       "key": 8,
      //       "logo": "https://cityuniversity.edu.pk/wp-content/uploads/2021/06/cusit-logo-white-300x62.png",
      //       "map": {
      //         "address": "Peshawar",
      //         "lat": 72.060284,
      //         "location": "Peshawar",
      //         "long": 34.66865,
      //         "placeid": ""
      //       },
      //       "menu": [
      //         {
      //           "key": 0,
      //           "title": "Major",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 1,
      //           "title": "Scholarships",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 2,
      //           "title": "Merit Calculator",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 3,
      //           "title": "Closing Merit",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 4,
      //           "title": "Reviews",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 5,
      //           "title": "Status",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         }
      //       ],
      //       "merit": 50,
      //       "province": "Sindh",
      //       "ranking": 68,
      //       "status": 0,
      //       "title": "City University of Science and Information Technology",
      //       "type": "University",
      //       "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
      //       "web": "http://www.uom.edu.pk/"
      //     },
      //     {
      //       "admissions": 1,
      //       "city": "Karachi",
      //       "contact": "+92-51-111-555-666​​​​​​​​​",
      //       "country": "Pakistan",
      //       "deadline": "01-08-2022",
      //       "degree": "BS (CS)",
      //       "discipline": "Computer Science",
      //       "fee": 90000,
      //       "id": "pk0",
      //       "info": "info@mite.edu.pk",
      //       "key": 9,
      //       "logo": "https://cust.edu.pk/static/uploads/2018/05/CUSTblack.png",
      //       "map": {
      //         "address": "Islamabad",
      //         "lat": 72.060284,
      //         "location": "Islamabad",
      //         "long": 34.66865,
      //         "placeid": ""
      //       },
      //       "menu": [
      //         {
      //           "key": 0,
      //           "title": "Major",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 1,
      //           "title": "Scholarships",
      //           "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb"
      //         },
      //         {
      //           "key": 2,
      //           "title": "Merit Calculator",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 3,
      //           "title": "Closing Merit",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 4,
      //           "title": "Reviews",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         },
      //         {
      //           "key": 5,
      //           "title": "Status",
      //           "url": "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
      //         }
      //       ],
      //       "merit": 50,
      //       "province": "Sindh",
      //       "ranking": 94,
      //       "status": 0,
      //       "title": "Capital University of Science & Technology",
      //       "type": "University",
      //       "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
      //       "web": "http://www.uom.edu.pk/"
      //     }
      // ]
      
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
    // database()
    // // .ref('/university_listing/')
    // // limitToFirst(3)
    // // testing
    // .ref('/zeeshan_listing/')
    //  .on('value', snapshot => {
    //    this.setAllValues(snapshot.val());
    //  });

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
    
    console.log('Did Mount');
    if(!this.props.route.params.fromAdvanceFilters){
      // console.log('Not from Advance Filter');
      this.firstFetchAllRecords();
    }

    this.focusListener = this.props.navigation.addListener('focus', () => {
      // this.firstFetchAllRecords();
      // console.log('Always Call or Not');
      this.setState({norecordfoundtext:'', norecordfoundsubtext:''});
      if(this.props.route.params.fromAdvanceFilters){
        // console.log('Always Call or Not fromAdvanceFilters');
        // this.ApplyAllFilters();
        this.firstFetchAllRecords();
      }
    });
  }

  componentWillUnmount() {
    this.focusListener();
  }

  // ApplyFiltersofHomeScreen(){
  //   // this.setState({activityindicator:false});
  // }

  firstFetchAllRecords(){
    // this.setState({universities:[]});
    // this.setState({filtersArray:[]});
    this.setState({activityindicator:true});
    database()
      .ref('/zeeshan_listing/')
      // .limitToFirst(20)
      .on('value', snapshot => {
      this.setState({universities: snapshot.val(), filtersArray: snapshot.val() }, function () {
        this.state.cloneArray = this.state.universities;
        this.ApplyAllFilters();
      });
    });
  }

  ApplyAllFilters(){
    if(this.props.route.params.fromAdvanceFilters==1){
      console.log('from Advance Filters Screen is =',this.props.route.params.filters)
      this.props.route.params.fromAdvanceFilters=0;
      this.setState({universities:[],filtersArray:[], norecordfoundtext:'', norecordfoundsubtext:''});
      // this.setState({filtersArray:[]});
      // this.firstFetchAllRecords();
      var allFilters = this.props.route.params.filters;
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
        if(this.state.universities.length==0){
          this.setState({
            norecordfoundtext:'No Results Found', 
            norecordfoundsubtext:'We cannot find any item matching your search.',});
        }else{
          this.setState({
            norecordfoundtext:'', 
            norecordfoundsubtext:'',});
        }
      });
    }else{
      console.log('from Home Screen is =',this.props.route.params.filters)
      var allFilters = this.props.route.params.filters;
      if(allFilters.hasOwnProperty('city')){
        var afterFilters = this.state.cloneArray.filter((a) => a.city==allFilters.city)
        this.state.cloneArray=afterFilters;
      }
      if(allFilters.hasOwnProperty('discipline')){
        var afterFilters = this.state.cloneArray.filter((a) => a.discipline==allFilters.discipline)
        this.state.cloneArray=afterFilters;
      }
      if(allFilters.hasOwnProperty('min')){
        var afterFilters = this.state.cloneArray.filter((a) => a.fee>=allFilters.min)
        this.state.cloneArray=afterFilters;
      }
      if(allFilters.hasOwnProperty('max')){
        var afterFilters = this.state.cloneArray.filter((a) => a.fee<=allFilters.max)
        this.state.cloneArray=afterFilters;
          // console.log('clone Array is =', this.state.cloneArray.length);
      }
      this.setState({universities:this.state.cloneArray}, function(){
        console.log('Total CS Records', this.state.universities.length);
        if(this.state.universities.length==0){
          this.setState({
            norecordfoundtext:'No Results Found', 
            norecordfoundsubtext:'We cannot find any item matching your search.',});
        }else{
          this.setState({
            norecordfoundtext:'', 
            norecordfoundsubtext:'',});
        }
      });
    }

    var finalFiltersArray=[];
    var keyValue=-1;
    for (var KEYS in this.props.route.params.filters){
      keyValue++;
      var filterObject = {
        [KEYS]:this.props.route.params.filters[KEYS],
        title:KEYS,
        value:this.props.route.params.filters[KEYS],
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
      console.log('Final Filters Array is = ',this.state.finalFiltersArray);
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
    console.log(item)  
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
    this.setState({universities: this.state.filtersArray.filter((item)=> item.fee>=min && item.fee<=max).sort((a,b)=>a.fee - b.fee) }, function(){
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
    this.setState({ showFeeModal: false })
  }

  SortByRanking() {
    this.setState({universities: this.state.filtersArray.sort((a, b) => a.ranking - b.ranking) }, function(){
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

  SortByCity(cityName) {
    this.setState({universities: this.state.filtersArray.filter((a) => a.city==cityName) }, function(){
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
    this.setState({ showCityModal: false })
  }

  updatesState() {
    this.setState({ showCityModal: false })
    this.setState({ showFeeModal: false })
  }

  showFeeModal() {
    this.setState({ showFeeModal: true })
  }

  showCityModal() {
    this.setState({ showCityModal: true })
  }

  SortByStatus(){
      this.setState({universities: this.state.filtersArray.sort((a, b) => b.status - a.status) }, function(){
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

  loadMore=()=>{
    // console.log('loadMore', this.state.universities.length);
    // database()
    //   .ref('/zeeshan_listing/').limitToFirst(this.state.universities.length+10)
    //   .on('value', snapshot => {
    //     console.log('loadMore data: ', snapshot.val().length);
    //     this.setState({universities: snapshot.val() });
    //     this.setState({filtersArray: this.state.universities });
    //     this.setState({activityindicator:false});
    //   });
  }

  dialCall = (item) => {
    var  number=item.contact;
     console.log("Item is :",item)
     let phoneNumber = '';
     if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
     else {phoneNumber = `telprompt:${number}`; }
     Linking.openURL(phoneNumber);
  };

  email(item){
   Linking.openURL(`mailto:${item.info}`);
  }

  ApplyNewFilters(item){
    this.setState({ finalFiltersArray: this.state.finalFiltersArray.filter((a) => a!=item)}, function(){
      if(this.state.finalFiltersArray.length==1){
        this.setState({finalFiltersArray:[]});
      }
    });
    this.setState({universities:[], filtersArray:[], norecordfoundtext:'', norecordfoundsubtext:''});
    // this.firstFetchAllRecords();
    var allFilters = this.props.route.params.filters;
    delete allFilters[item.title];
    console.log('Check All Filters Again',allFilters)

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
    this.setState({activityindicator:false});
  }

  clearAllFilters(item){
    console.log('Clear all Filters = ',item);
    console.log(item.title);
    this.setState({activityindicator:true});
    this.setState({finalFiltersArray:[]});
    database()
      .ref('/zeeshan_listing/')
      // .limitToFirst(20)
      .on('value', snapshot => {
      this.setState({universities: snapshot.val(), filtersArray: snapshot.val() }, function () {
        this.setState({activityindicator:false});
      });
    });
  }

  deleteFilters(item){
    console.log('Delete Filters');
    this.setState({activityindicator:true});
    database()
      .ref('/zeeshan_listing/')
      // .limitToFirst(20)
      .on('value', snapshot => {
      this.setState({universities: snapshot.val(), filtersArray: snapshot.val()}, function () {
        this.state.cloneArray = this.state.universities;
        this.ApplyNewFilters(item);
      });
    });
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

    // console.log(this.state.universities)
      if(this.state.norecordfoundtext.length!='' && this.state.norecordfoundsubtext.length!='' && this.state.universities.length==0){
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
                    <TouchableOpacity style={styles.filter} onPress={() => {
                      if (item.title == "Admission") {
                        this.SortByAdmission(item);
                      }else if (item.title == "Fee") {
                        this.showFeeModal();
                      }else if (item.title == "Ranking") {
                        this.SortByRanking();
                      }else if (item.title == "Location") {
                        this.showCityModal();
                      }else if (item.title == "Status") {
                        this.SortByStatus();
                      }
                    }
                    }>
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
                      <Text style={{color:'white', fontSize:16, fontWeight:'bold', marginRight:10}}>
                        {/* {item.title.charAt(0).toUpperCase() + item.title.slice(1)}: {item.value} */}
                        {render_txt(item)}
                      </Text>
                    </TouchableOpacity>
                    
                {(item.title=="Clear All")?(null):
                  <TouchableOpacity style={{
                      // ...StyleSheet.absoluteFillObject,
                      // alignSelf: 'flex-end',
                      // marginTop: -5,
                      // position: 'absolute',
                      position: 'absolute',
                      right:0,
                      }}
                      onPress={() => {
                          console.log(item.title);
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
          </SafeAreaView>
        )
      }else{
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
                    <TouchableOpacity style={styles.filter} onPress={() => {
                      if (item.title == "Admission") {
                        this.SortByAdmission(item);
                      }else if (item.title == "Fee") {
                        this.showFeeModal();
                      }else if (item.title == "Ranking") {
                        this.SortByRanking();
                      }else if (item.title == "Location") {
                        this.showCityModal();
                      }else if (item.title == "Status") {
                        this.SortByStatus();
                      }
                    }
                    }>
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
                      <Text style={{color:'white', fontSize:16, fontWeight:'bold', marginRight:10}}>
                        {/* {item.title.charAt(0).toUpperCase() + item.title.slice(1)}: {item.value} */}
                        {render_txt(item)}
                      </Text>
                    </TouchableOpacity>
                    
                    {(item.title=="Clear All")?(null):
                    <TouchableOpacity style={{
                      // ...StyleSheet.absoluteFillObject,
                      // alignSelf: 'flex-end',
                      // marginTop: -5,
                      // position: 'absolute',
                      position: 'absolute',
                      right:0,
                      }}
                      onPress={() => {
                          console.log('Console ',item.title);
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
                          <Text style={styles.universityDetailText}>Ranking: { item.ranking === 100000 ? "N/A": item.ranking } </Text>
                          <Text style={styles.universityDetailText}>Admission: {item.admissions?'Open':'Closed'}</Text>
                          <Text style={styles.universityDetailText}>Merit: {item.merit}</Text>
                          <View style={styles.locAndPhoneWrapper}>
                          <Text style={styles.universityDetailText}>Location: {item.city}</Text>
                            {/* <Text style={styles.phone}>Phone</Text> */}
                          </View>
                          <Text style={[styles.universityDetailText, styles.DeadlineText]}>Deadline : {item.deadline}</Text>
    
                          <View style={{}}>
                              <TouchableOpacity onPress={() => this.email(item)} style={{flex:0.5}}>
                              <Text style={styles.linksStyles}>Email: {item.info}</Text>
                              </TouchableOpacity>
                           </View>
    
                          <View style={{}}>
                              <TouchableOpacity style={{flex:0.5}} onPress={() => this.dialCall(item)}>
                              <Text style={styles.linksStyles}>Phone: {item.contact}</Text>
                              </TouchableOpacity>
                           </View>
    
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
          </SafeAreaView>
        )
      }
  }
}
