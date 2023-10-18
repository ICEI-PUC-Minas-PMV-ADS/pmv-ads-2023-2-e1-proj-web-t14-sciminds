import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class SocialMediaButtons {

    public static void main(String[] args) {
        JFrame frame = new JFrame("Social Media Buttons");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);

        JPanel panel = new JPanel();
        frame.add(panel);

        JButton facebookButton = new JButton("Facebook");
        JButton instagramButton = new JButton("Instagram");
        JButton twitterButton = new JButton("Google");

        panel.add(facebookButton);
        panel.add(instagramButton);
        panel.add(twitterButton);

        facebookButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                // Add code to redirect user to Facebook login page
            }
        });

        instagramButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                // Add code to redirect user to Instagram login page
            }
        });

        twitterButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                // Add code to redirect user to Google login page
            }
        });

        frame.setVisible(true);
    }
}