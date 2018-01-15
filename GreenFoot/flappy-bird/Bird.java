import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * The bird.
 * 
 * @author imacat <imacat@mail.imacat.idv.tw>
 * @version 2014/2/10
 */
public class Bird extends Actor {
    
    /** The gravity to the ground. */
    public static final int GRAVITY = 1;
    
    /** The horizontal speed that the bird flies (the pipes move backwards). */
    public static final int SPEED = 10;
    
    /** The vertical speed when the bird flaps. */
    public static final int FLAP_SPEED = -10;
    
    /** The current virtical speed. */
    private int speed = 0;
    
    /** The score. */
    private int score = 0;
    
    /**
     * Creates a new bird.
     * 
     */
    public Bird() {
        speed = 0;
        score = 0;
    }
    
    /**
     * Things to do for each turn.
     * 
     */
    public void act() {
        // Checks if the bird flaps.
        checkFlap();
        // Moves the bird.
        move();
        // Checks if the bird hits the obstacles.
        if (checkHit()) {
            Sky sky = (Sky) getWorld();
            sky.gameOver(score);
        } else {
            // Checks if the bird gets ths score.
            checkScore();
        }
    }
    
    /**
     * Checks if the bird flaps.
     * 
     */
    private void checkFlap() {
        if (Greenfoot.mouseClicked(null)) {
            speed = FLAP_SPEED;
        }
    }
    
    /**
     * Moves the bird.
     * 
     */
    private void move() {
        speed = speed + GRAVITY;
        setLocation(getX(), getY() + speed);
    }
    
    /**
     * Checks if the bird hits the obstacles.
     * 
     * @return true if hit, false otherwise
     */
    private boolean checkHit() {
        if (isTouching(Pipe.class)) {
            return true;
        }
        if (getY() == getWorld().getHeight() - 1) {
            return true;
        }
        return false;
    }
    
    /**
     * Checks if the bird gets ths score.
     * 
     */
    private void checkScore() {
        if (isTouching(ScoreLine.class)) {
            removeTouching(ScoreLine.class);
            score++;
            Sky sky = (Sky) getWorld();
            sky.setScore(score);
        }
    }
}