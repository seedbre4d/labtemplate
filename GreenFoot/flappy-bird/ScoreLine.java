import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * The score line.  The bird gets the score when it passed the score line.
 * 
 * @author imacat <imacat@mail.imacat.idv,tw>
 * @version 2014/2/10
 */
public class ScoreLine extends Actor {
    
    /**
     * Things to do for each turn.
     * 
     */
    public void act() {
        // Moves the score line backward.
        move();
    }
    
    /**
     * Moves the pipe backward.
     * 
     */
    private void move()
    {
        setLocation(getX() - Bird.SPEED, getY());
        if (getX() <= 0) {
            getWorld().removeObject(this);
        }
    }
}