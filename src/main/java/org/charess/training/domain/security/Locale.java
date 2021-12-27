package org.charess.training.domain.security;

public enum Locale {

    ENGLISH("en"),
    FRANCAIS("fr"),
    KREYOL("kr");

    String locale;

    Locale(String locale){
        this.locale = locale;
    }

    public String getLocale() {
        return locale;
    }
}