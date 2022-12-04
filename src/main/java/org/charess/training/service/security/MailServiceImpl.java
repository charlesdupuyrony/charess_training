package org.charess.training.service.security;

import org.charess.training.service.training.TrainingServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.internet.MimeMessage;

@Transactional
@Service("mailService")
public class MailServiceImpl implements MailService {

    private final String support = "charess@charess.org";
    private JavaMailSender javaMailSender;
    private final Logger log = LoggerFactory.getLogger(MailServiceImpl.class);


    @Autowired
    public MailServiceImpl(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendHtml(String subject, String[] ccs, String[] tos, String body) {
        try {
            MimeMessage msg = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(msg, true, "utf-8");
            msg.setContent(body, "text/html;charset=utf-8");
            helper.setSubject(subject);
            helper.setFrom(support);
            helper.setTo(tos);
            helper.setCc(ccs);
            javaMailSender.send(msg);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public void sendPlain(String subject, String[] ccs, String[] tos, String body){
        final SimpleMailMessage smm = new SimpleMailMessage();
        smm.setSubject(subject);
        smm.setFrom(support);
        smm.setText(body);
        smm.setTo(tos);
        smm.setCc(ccs);
        javaMailSender.send(smm);
    }

}
