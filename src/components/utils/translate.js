export default function translator(hashtable, letter){
  if(hashtable[letter]){
    return hashtable[letter]
  }else{
    return ''
  }

}