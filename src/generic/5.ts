/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

/*interface KeyValuePair {
  key;
  value;
}

export {};
*/



interface KeyValuePair<K, V> {
	key: K;
	value: V;
}

export {};