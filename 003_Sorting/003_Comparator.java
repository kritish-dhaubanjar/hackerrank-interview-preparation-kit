import java.util.*;

class Player {
	String name;
	int score;

	Player(String name, int score) {
		this.name = name;
		this.score = score;
	}
}

class Checker implements Comparator<Player> {
  	// complete this method
	public int compare(Player a, Player b) {
       if(b.score == a.score){
            return a.name.compareTo(b.name);
        }else{
            return b.score - a.score;
        }
    }
}
