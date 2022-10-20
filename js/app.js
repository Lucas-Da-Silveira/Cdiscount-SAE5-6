class ObserverObject {

    constructor(treshold, className, typeIdOrClass, active) {
        this.treshold = treshold;
        this.className = className;
        this.typeIdOrClass = typeIdOrClass;
        this.active = active;
    }

    observerObject()
    {
        let classWithPoint;
        let type;

        // Vérifier si c'est un id ou une class et mettre le bon char devant className
        if(this.typeIdOrClass == "id") {classWithPoint = "#" + this.className; type = "id(#)";}
        else if(this.typeIdOrClass == "class") {classWithPoint = "." + this.className;  type = "class(.)";}
        else {console.log("ERROR : Type Id or Class undefined.")}

        // Affiche les logs d'initialisation de chaque observer
        let infos = ["Treshhold : " + this.treshold, "Item Name : " + this.className, "Type : " + type]
        console.log(infos);

        // Construction de l'observer item
        let observer = new IntersectionObserver(items => {
            for(let item of items)
            {
                if(item.intersectionRatio > this.treshold) {
                    item.target.classList.remove(this.className);
                    this.active = false;
                    console.log(item);
                } else {
                    item.target.classList.add(this.className);
                    this.active = true;
                    console.log(item);
                }         
            }
        }, { // option :
            threshold: [0.25, 0.5, 0.75]
        });

        // Récupère tout les éléments "classWithPoint"
        const elements = document.querySelectorAll(classWithPoint);
        for(let element of elements)
        {
            element.classList.add(this.className);
            // Obesrvations des conteners
            observer.observe(element);
        }
    }
}

window.onload = () => {

    // ------------ OBSERVEUR DU TITRE ------------
    let titleObserver = new ObserverObject(0.7, "anim-main-title", "class");
    titleObserver.observerObject();

    // ------------ OBSERVEUR DES BOX DE TEXT ------------
    let contenerObserver = new ObserverObject(0.7, "hidden-contener", "class");
    contenerObserver.observerObject();

    // ------------ OBSERVEUR DES DATES ------------
    let hiddenObserver = new ObserverObject(0.7, "hidden", "class");
    hiddenObserver.observerObject();
    
}