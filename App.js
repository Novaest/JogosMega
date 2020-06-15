
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      random1:0,
      random2:0,
      random3:0,
      random4:0,
      random5:0,
      random6:0
    }
  }

TesteRandom=()=>
{
  //let RandomNumber1 = Math.floor(Math.random() * 60) + 1 ;
 // let RandomNumber2 = Math.floor(Math.random() * 60) + 1 ;
 // let RandomNumber3 = Math.floor(Math.random() * 60) + 1 ;
//let RandomNumber4 = Math.floor(Math.random() * 60) + 1 ;
 // let RandomNumber5 = Math.floor(Math.random() * 60) + 1 ;
//let RandomNumber6 = Math.floor(Math.random() * 60) + 1 ;
let randomTeste = [ ];

for(let i=0 ; i < 6 ; i ++){
  var testeNumero = Math.floor(Math.random() * 60) + 1 ;
  while(randomTeste.indexOf(testeNumero) >=0) {
    testeNumero= Math.floor(Math.random() * 60) + 1 ;
  }
  randomTeste[i] = testeNumero;
}
this.setState({
     random1 : randomTeste[0],
     random2 : randomTeste[1],
     random3 : randomTeste[2],
     random4 : randomTeste[3],
     random5 : randomTeste[4],
     random6 : randomTeste[5]
     })
}
  render() {
    return (
      <View style={styles.container} >
       <Text style={styles.numerosEstilo}>
          Gere seu jogo da Mega aqui:
       </Text>
       <Text key="1" style={styles.numerosEstilo}>{this.state.random1}</Text>
       <Text key="2" style={styles.numerosEstilo}>{this.state.random2}</Text>
       <Text key="3" style={styles.numerosEstilo}>{this.state.random3}</Text>
       <Text key="4" style={styles.numerosEstilo}>{this.state.random4}</Text>
       <Text key="5" style={styles.numerosEstilo}>{this.state.random5}</Text>
       <Text key="6" style={styles.numerosEstilo}>{this.state.random6}</Text>

       <Button style={styles.numerosEstilo} title="Clique aqui para Gerar o jogo" onPress={this.TesteRandom} />
        
      </View>

    );
  }
}

const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  numerosEstilo :  {
   padding: 10,
    fontSize: 20
  }

});