package org.charess.training.service.security;

public interface MailService {
    void sendHtml(String subject, String[] ccs, String[] tos, String body);
    void sendPlain(String subject, String[] ccs, String[] tos, String body);
}
