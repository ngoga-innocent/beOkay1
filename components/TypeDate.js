import React, { useRef,useState } from 'react';
import { View, TextInput, StyleSheet,TouchableOpacity,Text } from 'react-native';
import { width } from './Colors';

const DateInput = ({onChangeDate }) => {
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
 
 
  const [day1,setDay]=useState()
  const [month1,setMonth]=useState()
  const [year1,setYear]=useState()
  const [selectedDate,setSelectedDate]=useState()
  const [monthError,setMonthError]=useState(false)
  const [dayError,setDayError]=useState(false)


  const handleDayChange = (text) => {
    if (text.length === 2) {
        const day = parseInt(text);
      if (day >= 1 && day <= 30) {
        monthRef.current.focus();
        setDayError(false)
       setDay(text)
      }
      else{
        dayRef.current.focus()
        setDayError(!dayError)
      }
    }
};

  const handleMonthChange = (text) => {
    if (text.length === 2) {
      const month = parseInt(text);
      if (month >= 1 && month <= 12) {
        yearRef.current.focus();
        setMonthError(false)
        setMonth(text)
      }
      else{
        monthRef.current.focus()
        setMonthError(!monthError)
      }
    }
  };
  const handleMonthBlur = () => {
    if (!monthError) {
      monthRef.current.setNativeProps({ style: { borderColor: 'gray' } });
    }
  };
  const handleDayBlur = () => {
    if (!monthError) {
      monthRef.current.setNativeProps({ style: { borderColor: 'gray' } });
    }
  };
//   
const handleYearChange = (text) => {
    if (text.length === 4) {
      const year = parseInt(text);
      if (!isNaN(year)) {
        // const month = parseInt(month1);
        // const day = parseInt(day1);
        setYear(text)
        // if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
          
        //   setSelectedDate(new Date(year,month,day))
        //   if (!isNaN(date.getTime())) {
        //     onChangeDate(12);
        //   } else {
        //     console.log("Invalid Date");
        //   }
        // } else {
        //   console.log("Invalid Month or Day");
        // }
      }
    }
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        ref={dayRef}
        style={[styles.input,{borderColor:dayError?'red':'gray'}]}
        placeholder="DD"
        maxLength={2}
        onChangeText={handleDayChange}
        keyboardType="number-pad"
        onBlur={handleDayBlur}
        value={day1}
      />
      <TextInput
        ref={monthRef}
        style={[styles.input,{borderColor:monthError?'red':'gray'}]}
        placeholder="MM"
        maxLength={2}
        onChangeText={handleMonthChange}
        keyboardType="number-pad"
       onBlur={handleMonthBlur}
       value={month1}
      />
      <TextInput
        ref={yearRef}
        style={styles.input}
        placeholder="YYYY"
        maxLength={4}
        keyboardType="number-pad"
        onChangeText={handleYearChange}
        value={year1}
      />
      <TouchableOpacity onPress={()=>onChangeDate(day1,month1,year1)}>
        <Text>Apply Date</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems:'center'
    // width:'100%'
    // alignSelf:'center'
  },
  input: {
    borderBottomWidth: 1,
    borderColor:'gray',
    paddingHorizontal: width/50,
    // width: '30%',
    marginHorizontal: width/50,
  },
});

export default DateInput;
