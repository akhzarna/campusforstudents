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
    database()
      .ref('/zeeshan_listing/')
      // .limitToFirst(20)
      .on('value', snapshot => {
      this.setState({universities: snapshot.val(), filtersArray: snapshot.val() }, function () {
        this.state.cloneArray = this.state.universities;
        this.state.deepCloneArray = this.state.universities;
        this.ApplyAllFilters();
      });
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
    
    database()
      .ref('/zeeshan_listing/')
      // .limitToFirst(20)
      .on('value', snapshot => {
      this.setState({universities: snapshot.val(), filtersArray: snapshot.val() }, function () {
        console.log('allFilters setState');
        this.setState({allFilters:allFiltersCloneArray, activityindicator:false});
      });
    });
  }

  deleteFilters(item){
    // console.log('Delete Filters');
    this.setState({activityindicator:true});
    database()
      .ref('/zeeshan_listing/')
      // .limitToFirst(20)
      .on('value', snapshot => {
      this.setState({universities: snapshot.val(), filtersArray: snapshot.val()}, function () {
        this.state.cloneArray = this.state.universities
        this.state.deepCloneArray = this.state.universities
        this.ApplyNewFilters(item);
      });
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
