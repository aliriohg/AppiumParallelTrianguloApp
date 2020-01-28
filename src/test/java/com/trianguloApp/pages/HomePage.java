package com.trianguloApp.pages;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.pagefactory.WithTimeout;
import io.appium.java_client.pagefactory.iOSXCUITFindBy;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import java.time.Duration;
import java.time.temporal.ChronoUnit;
import java.util.concurrent.TimeUnit;

public class HomePage {
    @WithTimeout(time = 10, chronoUnit = ChronoUnit.SECONDS)
    @iOSXCUITFindBy(id = "com.eliasnogueira.trianguloapp:id/txtLado1")
    @AndroidFindBy(id = "com.eliasnogueira.trianguloapp:id/txtLado1")
    private MobileElement txtLado1;

    @WithTimeout(time = 10, chronoUnit = ChronoUnit.SECONDS)
    @iOSXCUITFindBy(id = "com.eliasnogueira.trianguloapp:id/txtLado2")
    @AndroidFindBy(id = "com.eliasnogueira.trianguloapp:id/txtLado2")
    private MobileElement txtLado2;

    @WithTimeout(time = 10, chronoUnit = ChronoUnit.SECONDS)
    @iOSXCUITFindBy(id = "com.eliasnogueira.trianguloapp:id/txtLado3")
    @AndroidFindBy(id = "com.eliasnogueira.trianguloapp:id/txtLado3")
    private MobileElement txtLado3;

    @WithTimeout(time = 10, chronoUnit = ChronoUnit.SECONDS)
    @iOSXCUITFindBy(id = "com.eliasnogueira.trianguloapp:id/btnCalcular")
    @AndroidFindBy(id = "com.eliasnogueira.trianguloapp:id/btnCalcular")
    private MobileElement btnCalcular;

    @WithTimeout(time = 10, chronoUnit = ChronoUnit.SECONDS)
    @iOSXCUITFindBy(id = "com.eliasnogueira.trianguloapp:id/txtResultado")
    @AndroidFindBy(id = "com.eliasnogueira.trianguloapp:id/txtResultado")
    private MobileElement txtResultado;

    public HomePage(AppiumDriver driver) {
        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
    }

    public HomePage inputLado1(String value) {
        txtLado1.sendKeys(value);
        return this;
    }

    public HomePage inputLado2(String value) {
        txtLado2.sendKeys(value);
        return this;
    }

    public HomePage inputLado3(String value) {
        txtLado3.sendKeys(value);
        return this;
    }

    public HomePage calcular() {
        btnCalcular.click();
        return this;
    }

    public String getTextResultado() {
        return txtResultado.getText();
    }
}
