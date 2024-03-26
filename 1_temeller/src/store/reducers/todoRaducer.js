/*
! reducer
* state in nasıl değişeceğine karar verir.
* reducer normal bir fonksiyondur.
* ve bu fonksiyon iki parametre alır
* > state : reducer da tutulan verilerin son durumu
* > action : verilerin nasıl değişeceğini ifade eden nesne

* useReducer dan farklı olarak initialState i state parametresine varsayılan değer olarak veririz.
*/

const initialState = {
  todos: [],
  isDarkMode: true,
  x: "",
  y: "",
};

const todoReducer = (state = initialState, action) => {
  // aksiyonun type ına göre gerekli güncellemeyi yap
  switch (action.type) {
    case "EKLE":
      return state;

    case "CIKAR":
      return state;

    // eğer gelen aksiyon yukardakilerden biri değilse varolan state i koru.
    default:
      return state;
  }
};

export default todoReducer;