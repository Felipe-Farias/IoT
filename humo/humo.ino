int humo=0;

void setup(){
  Serial.begin(9600);
}

void loop(){
  humo = analogRead(1);
  Serial.println(humo, DEC);
  delay(500);
}
