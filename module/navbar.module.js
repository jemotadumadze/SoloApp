import { Base } from '../common/base.js'

export class NavBar extends Base {
  constructor(id) {
    super(id)
  }

  _headerMenuNav() {
    const nav = [
      {
        title: 'მთავარი',
      },
      {
        title: 'ბანკინგი',
      },
      {
        title: 'ელექტრონული ბანკი',
      },
      {
        title: 'Lifestyle',
      },
      {
        title: 'შეთავაზება',
      },
      {
        title: 'ჩვენ შესახებ',
      },
      {
        title: 'სიახლეები',
      },
      {
        title: 'ინვესტიციები',
      },
      {
        title: 'ბლოგი',
      },
    ]

    return nav
      .map((obj) => {
        return `<li class="submenu-item">${obj.title}</li>`
      })
      .join('')
  }
  render() {
    const content = this._headerMenuNav()
    this.setContent(content)
  }
}
