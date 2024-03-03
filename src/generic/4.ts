/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

/*class Component {
  constructor (public props:T) {

  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};
*/




interface Props {
	title: string;
}

class Component<T extends Props> {
	constructor(public props: T) {}
}

class Page extends Component<Props> {
	pageInfo() {
		console.log(this.props.title);
	}
}

export {};






interface Props {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

// Клас Page без використання extends
class Page {
  private component: Component<Props>;

  constructor(props: Props) {
    this.component = new Component(props);
  }

  pageInfo() {
    console.log(this.component.props.title);
  }
}

export {};