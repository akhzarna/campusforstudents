import { ActivityIndicator, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity, Alert, Modal, TextInput } from 'react-native'
import React, { Component } from 'react'
import styles from './UniversitiesStyle';
import Separator from '../../Components/Separator';
import FeeModal from '../filterModalScreens/FeeModal';
import CityModal from "./CityModal"
import database from '@react-native-firebase/database';
// import { firebase } from '@react-native-firebase/database';
import firestore from "@react-native-firebase/firestore"
import { DocumentSnapshot, QuerySnapshot } from '@firebase/firestore';

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

      allUniversitiesDummyData : [
          {
            "admissions": 1,
            "city": "Lahore",
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
              "address": "Islamabad",
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
            "province": "Sindh",
            "ranking": 47,
            "status": 1,
            "title": "Federal Urdu University of Arts, Sciences & Technology",
            "type": "University",
            "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
            "web": "http://www.uom.edu.pk/"
          },
          {
            "admissions": 1,
            "city": "Islamabad",
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
            "merit": 92,
            "province": "Sindh",
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
            "city": "Islamabad",
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
            "merit": 50,
            "province": "Sindh",
            "ranking": 90,
            "status": 1,
            "title": "Dawood University of Engineering & Technology",
            "type": "University",
            "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
            "web": "http://www.uom.edu.pk/"
          },
          {
            "admissions": 0,
            "city": "Lahore",
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
            "merit": 50,
            "province": "Sindh",
            "ranking": 120,
            "status": 0,
            "title": "Dadabhoy institute of higher education",
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
            "ranking": 23,
            "status": 1,
            "title": "DOW University of Health Sciences",
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
            "city": "Karachi",
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
              "address": "Peshawar",
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
            "province": "Sindh",
            "ranking": 68,
            "status": 0,
            "title": "City University of Science and Information Technology",
            "type": "University",
            "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
            "web": "http://www.uom.edu.pk/"
          },
          {
            "admissions": 1,
            "city": "Karachi",
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
              "address": "Islamabad",
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
            "province": "Sindh",
            "ranking": 94,
            "status": 0,
            "title": "Capital University of Science & Technology",
            "type": "University",
            "url": "https://firebasestorage.googleapis.com/v0/b/campusfinder-6c74d.appspot.com/o/university_listing%2Fdownload%20(1).jpeg?alt=media&token=5339f81e-2e01-4460-bc48-d00888d984eb",
            "web": "http://www.uom.edu.pk/"
          }
      ]
    }
  }

  componentDidMount() {

    // database()
    // .ref('/university_listing/')
    // limitToFirst(3)
    // testing
    // .ref('/zeeshan_listing/').limitToFirst(5)
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
    
    this.setState({filtersArray:this.state.allUniversitiesDummyData});
    this.setState({universities:this.state.allUniversitiesDummyData}, function () {
      this.state.cloneArray = this.state.universities;
      this.ApplyAllFilters();
    });
    this.setState({activityindicator:false});
    // this.ApplyAllFilters();
      // To call function on pop()
    this.focusListener = this.props.navigation.addListener('focus', () => {
      if(!this.props.route.params.fromHomeScreen)
      this.ApplyAllFilters();
      console.log('When FocusListener is called');
    });
  }

  componentWillUnmount() {
    this.focusListener();
  }

  ApplyAllFilters(){
    var allFilters = this.props.route.params.filters;
    // console.log('We are successfull',this.state.universities);
    if(allFilters.hasOwnProperty('city')){
      // console.log('hasOwnProperty is city');
      var afterFilters = this.state.cloneArray.filter((a) => a.city==allFilters.city)
      // console.log('afterFilters is ',afterFilters.length);
      this.state.cloneArray=afterFilters;
    }
    if(allFilters.hasOwnProperty('discipline')){
      // console.log('hasOwnProperty is discipline');
      // console.log('clone Array is =', this.state.cloneArray.length);
      var afterFilters = this.state.cloneArray.filter((a) => a.discipline==allFilters.discipline)
      this.state.cloneArray=afterFilters;
        console.log('clone Array is =', this.state.cloneArray.length);
        console.log('afterFilters Array is =', afterFilters);
    }
    if(allFilters.hasOwnProperty('min')){
      console.log('hasOwnProperty is min');
    }
    if(allFilters.hasOwnProperty('max')){
      console.log('hasOwnProperty is max');
    }

    // console.log('Hello', this.state.universities);
    // console.log('Hello', this.state.filtersArray);

    this.setState({activityindicator:false});

    // database()
    // // .ref('/university_listing/')
    // // limitToFirst(3)
    // // testing
    // .ref('/zeeshan_listing/').limitToFirst(5)
    //   .on('value', snapshot => {
    //     this.setAllValues(snapshot.val());
    // });

    // var allFilters = this.props.route.params.filters;
    // this.setState({ universities: this.state.filtersArray.filter((item)=> item.fee>=allFilters.min && item.fee<=allFilters.max && item.city==allFilters.city && item.degree==allFilters.studylevel) })
    // this.setState({activityindicator:false});
    // console.log('We are successfull',this.props.route.params.filters);
  }

  setAllValues(allrecords){
    // console.log('We are successfull',this.props.route.params.filters);
    // console.log('User data: ', allrecords.length);
    this.setState({ universities: allrecords });
    this.setState({ filtersArray: allrecords });
    // this.ApplyAllFilters();
  }

  SortByFireStore() {
    this.setState({ universities: this.state.firestoreData })
  }

  SortByAdmission(item) {  
    console.log(item)  
    this.setState({ universities: this.state.filtersArray.sort((a, b) => b.admissions - a.admissions) })
  }

  SortByFee(min, max) {
    this.setState({ universities: this.state.filtersArray.filter((item)=> item.fee>=min && item.fee<=max).sort((a,b)=>a.fee - b.fee) })
    this.setState({ showFeeModal: false })
  }

  SortByRanking() {
    this.setState({ universities: this.state.filtersArray.sort((a, b) => a.ranking - b.ranking) })
  }

  SortByCity(cityName) {
    this.setState({ universities: this.state.filtersArray.filter((a) => a.city==cityName) })
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
      this.setState({ universities: this.state.filtersArray.sort((a, b) => b.status - a.status) })
  }

  loadMore=()=>{
    // console.log('loadMore', this.state.universities.length);
    // database()
    //   .ref('/zeeshan_listing/').limitToFirst(this.state.universities.length+10)
    //   .on('value', snapshot => {
    //     console.log('loadMore data: ', snapshot.val().length);
    //     this.setState({ universities: snapshot.val() });
    //     this.setState({ filtersArray: this.state.universities });
    //     this.setState({activityindicator:false});
    //   });
  }

  render() {
    // console.log(this.state.universities)
    return (
      <SafeAreaView style={styles.container}>
      
      <View style={styles.header} elevation={5}>
          <Text style={styles.headerTxt}>Institutes</Text>
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
                }}>
                  <Text>{item.title}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('UniversityDetail', { obj: item })}>
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
