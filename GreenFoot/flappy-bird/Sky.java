import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * The sky that the bird flies.
 * 
 * @author imacat <imacat@mail.imacat.idv.tw>
 * @version 2014/2/10
 */
public class Sky extends World {
    
    /** The spacing between the pipe pair.*/
    public static final int PIPES_SPACING = 150;
    
    /** The minimal height of a pipe. */
    public static final int PIPE_MIN_HEIGHT = 25;
    
    /** The interval between two pipe pairs. */
    private final int PIPE_INTERVAL = 30;
    
    /** The timer to the next pipe pair. */
    private int pipeTimer = 0;
    
    /** The scoreBoard. */
    private ScoreBoard scoreBoard = null;
    
    /**
     * Constructor for objects of class Sky.
     * 
     */
    public Sky() {
        // Create a new world with 600x400 cells with a cell size of 1x1 pixels.
        super(600, 400, 1);
        addObject(new Bird(), getWidth() / 2, getHeight() / 2);
        scoreBoard = new ScoreBoard();
        addObject(scoreBoard, 70, 50);
        pipeTimer = PIPE_INTERVAL * 2;
        setPaintOrder(GameOver.class, ScoreBoard.class, Bird.class, Pipe.class);
    }
    
    /**
     * Things to do for each turn.
     * 
     */
    public void act() {
        // Adds a pipe pair periodically.
        addPipePairPeriodically();
    }
    
    /**
     * Sets the score.
     * 
     * @param score the score
     */
    public void setScore(int score) {
        scoreBoard.setScore(score);
    }
    
    /**
     * Game over.
     * 
     * @param score the score
     */
    public void gameOver(int score) {
        addObject(new GameOver(score), getWidth() / 2, getHeight() / 2);
        Greenfoot.stop();
    }
    
    /**
     * Adds a pipe pair periodically.
     * 
     */
    private void addPipePairPeriodically() {
        pipeTimer--;
        if (pipeTimer == 0) {
            addPipePair();
            pipeTimer = PIPE_INTERVAL;
        }
    }
    
    /**
     * Adds a pipe pair.
     * 
     */
    private void addPipePair() {
        int pipeMaxHeight = getHeight() - PIPES_SPACING - PIPE_MIN_HEIGHT;
        int height1 = PIPE_MIN_HEIGHT + Greenfoot.getRandomNumber(pipeMaxHeight - PIPE_MIN_HEIGHT);
        int y1 = height1 / 2 - 1;
        int height2 = getHeight() - height1 - PIPES_SPACING;
        int y2 = getHeight() - height2 / 2 - 1;
        int y3 = height1 + PIPES_SPACING / 2 - 1;
        addObject(new Pipe(height1), getWidth() - 1, y1);
        addObject(new Pipe(height2), getWidth() - 1, y2);
        addObject(new ScoreLine(), getWidth() - Pipe.WIDTH / 2, y3);
    }
}