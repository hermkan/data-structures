const LinkedList = require("./LinkedList");
const seasons = new LinkedList();
seasons.printList();
seasons.addToHead("summer");
seasons.printList();
seasons.addToHead("spring");
seasons.printList();
seasons.addToTail("fall");
seasons.printList();
seasons.addToTail("winter");
seasons.printList();
seasons.removeHead();
seasons.printList();
