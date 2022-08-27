## นายพีรพล ศิริวิริยาถรณ์ section 03
- fetch api และนำข้อมูลมาแสดงเพิ่มเติม
- ปรับแต่ง เพิ่มรูปภาพ Background
- จัดวาง Layout ใหม่

ในไฟล์ App.js จะสร้าง Screen ไว้สองหน้าคือ หน้า Home และ Weather โดยจะใช้ library ของ react-native โดยจะติดตั้งผ่าน cmd โดยใช้คำสั่ง yarn add @react-navigation/stack @react-navigation/native


ในส่วนของ ZipCodeScreen และ WeatherScreen Components ที่ import มาจะเป็นหน้าต่างที่ต้องการจะแสดงผล 

### ZipCodeScreen 
  ใน ZipCodeScreen จะใช้ FlatList ซึ่งเป็น Component ของ react-native และจะ pass ข้อมูลไปได้แก่ data={availableZipItems} keyExtractor={_keyExtractor} renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />} ซึ่งจะสร้าง list ของข้อมูล place และ code เก็บไว้ในตัวแปร availableZipItems และให้ render ZipItem ออกมา ใน ZipItem จะมีการใช้ TouchableHighlight เเละเพิ่ม event onPress เมื่อกดแล้วจะ navigate ไปยัง Weather และแสดงข้อมูลตามที่ได้เลือกไว้

### WeatherScreen 
  จะมีการ fetch ข้อมูลผ่าน api http://api.openweathermap.org/data/2.5/weatherq=${props.zipCode},th&units=metric&APPID=9aebc24f65604b3bafc6612917507d59 และจะเก็บค่าที่ fetch ได้ไว้ใน state และ import Forecast เข้ามาพร้อมกับส่ง props ที่ได้ไป(ค่าที่ fetch มา)


