export default class Kudo{
  constructor(data){
    this.data = data;
    this.build();

  }
  build(){    
  this.selectNameEl = document.getElementById('select-name');
  this.galeryEl = document.getElementById('galery');
  this.cardSelect = document.getElementById('card-select')
  this.dataSelect = []
  this.getSelectName()
    
  } // build

  getData(){
    return  this.data;
  } // getData

  getSelectName(){
    this.insertElement(false)
    this.selectNameEl.addEventListener('change', e => {
      this.isActive = document.querySelectorAll('.card');
      [...this.isActive].forEach(card =>{
        if(e.target.value ==card.dataset.para ){
          card.classList.add("active")
          card.classList.remove("desactve")
        }else if(e.target.value == 'all'){
          card.classList.add("active")
          card.classList.remove("desactve")
        }else{
          card.classList.add("desactve")
          card.classList.remove("active")
        }
      })
 
      
    })
    
  } // getSelectName

  insertElement(selectName){ 
    this.data.forEach(card => {
      if(!this.dataSelect.find(value => value == card.para)){
        this.selectNameEl.appendChild(this.createElementOption(card))
      }
      this.galeryEl.appendChild(this.insertElementCard(card))
      this.dataSelect.push(card.para)
    });

  } // insertSelectOption

  createElementOption(card){
    let option = document.createElement('option')
    option.setAttribute('value', card.para)
    option.innerHTML = card.para
    return option;
  } // createElementOption

  insertElementCard(card, selectName){
    let div = document.createElement('div')
    
    div.setAttribute('class','card active')
    div.setAttribute('id','card')
    div.dataset.para = card.para
    div.innerHTML = this.elementoCard(card)
    div.addEventListener('click', e =>{ 
      let div = document.createElement('div')
      div.setAttribute('id','card')
      div.innerHTML = this.elementoCard(card)
    
      this.cardSelect.classList.add('show')
      this.cardSelect.innerHTML =""
      this.cardSelect.appendChild(div)

      this.cardSelect.addEventListener('click', e=>{
        

        this.cardSelect.classList.remove('show')
      })
    })
    return div

  }
  getImg(type){
    let imagem = ''
    switch (type) {
      case 'Obrigado':
        imagem = 'obrigado'
        break;
        case 'Ótimo trabalho':
        imagem = 'otimo-trabalho'
        break;
        case 'Sensacional':
        imagem = 'sensacional'
        break;
        case 'Parabéns':
        imagem = 'parabens'
        break;
        case 'Bom trabalho':
        imagem = 'bom-trabalho'
        break;
    
      default:
        break;
    }
    return  imagem
  }
  elementoCard(card){
    return `
    <div class="card-body" style="background-image:url('./img/${this.getImg(card.type)}.png');background-size: contain;background-repeat:no-repeat;">
			<p>De: ${card.de}</p>
			<p>Para: ${card.para}</p>
			<p>${card.msg}</p>
		</div>
    `
  }

  
}

