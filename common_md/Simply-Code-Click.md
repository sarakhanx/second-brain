## ชนิดข้อมูลพื้นฐาน (Primitive Data Types)
```
var age int = 30   //`int`: ใช้เก็บค่าจำนวนเต็ม
var pi float64 = 3.14   //`float64`: ใช้เก็บค่าทศนิยม
var isTrue bool = true   //`bool`: ใช้เก็บค่าความจริง (true/false)
var name string = "John Doe"   //`string`: ใช้เก็บข้อความ
var unicodeChar rune = 'ก'  //`rune`: ใช้เก็บค่า Unicode code point (เหมือนกับ int32)
var byteValue byte = 'A'   //`byte`: ใช้เก็บค่า byte (เหมือนกับ uint8)
```
## ชนิดข้อมูลประเภทโครงสร้าง (Composite Data Types)
```
var numbers = [3]int{1, 2, 3}
var names = []string{"Alice", "Bob", "Charlie"}
var person = map[string]int{"age": 30, "height": 180}
type Employee struct {
    ID   int
    Name string
}
var emp Employee = Employee{ID: 1, Name: "John"}

```
## ชนิดข้อมูลโปรโตไทป์ (Pointer Data Types)
```
var ptr *int
```
## ชนิดข้อมูลอินเทอร์เฟซ (Interface Data Types)
```
type Shape interface {
    Area() float64
}
```
## ชนิดข้อมูลฟังก์ชัน (Function Data Types)
```
type Task struct {
    ID   int
    Name string
}
```
## ชนิดข้อมูลฟังก์ชัน (Function Data Types)
```
var add func(int, int) int
```
## ชนิดข้อมูลงาน (Structural Data Types)
```
type Task struct {
    ID   int
    Name string
}
```