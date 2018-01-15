import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)


/**
 * A pipe that blocks and kills the bird.
 * 
 * @author imacat <imacat@mail.imacat.idv.tw>
 * @version 2014/2/10
 */
public class Pipe extends Actor {
    
    /** The speed of the pipes to move backward. */
    public static final int WIDTH = 100;
    
    /**
     * Creates a new pipe.
     * 
     * @param height the height of the pipe
     */
    public Pipe(int height) {
        GreenfootImage image = new GreenfootImage(WIDTH, height);
        image.setColor(Color.GREEN);
        image.fill();
        setImage(image);
    }
    
    /**
     * Things to do for each turn.
     * 
     */
    public void act() {
        // Moves the pipe backward.
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