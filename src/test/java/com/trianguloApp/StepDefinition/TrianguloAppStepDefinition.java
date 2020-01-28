package com.trianguloApp.StepDefinition;

import com.trianguloApp.pages.HomePage;
import com.utils.BaseTest;
import com.utils.ThreadLocalDriver;
import io.appium.java_client.Setting;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;

public class TrianguloAppStepDefinition extends BaseTest {

    HomePage homePage;

    @Given("La aplicacion de triangulo esta corriendo")
    public void laAplicacionDeTrianguloEstaCorriendo() throws Exception {
//        setUp();
        homePage= new HomePage(ThreadLocalDriver.getTLDriver());
    }
    @Given("Los lados tienen los siguientes valores")
    public void losLadosTienenLosSiguientesValores(Map<String,String> dataTable) {
        homePage.inputLado1(dataTable.get("lado1"))
                .inputLado2(dataTable.get("lado2"))
                .inputLado3(dataTable.get("lado3"));
    }

    @When("Se pulsa calcular")
    public void sePulsaCalcular() {
        homePage.calcular();
    }
    @Then("El mensaje es {string}")
    public void elMensajeEs(String msg) {
        homePage.getTextResultado().equals(msg);
    }

    @After
    public void afterScenario(){
        System.out.println("Fin Del Scenario");
        tearDown();
    }

    @Before
    public void beforeScenario() throws Exception {
        System.out.println("init Scenario");
        ThreadLocalDriver.getTLDriver();
//        setUp();
    }

//    @Override
//    protected DesiredCapabilities getCaps() throws URISyntaxException {
//        DesiredCapabilities capabilities = new DesiredCapabilities();
//        capabilities.setCapability("platformName", "Android");
////        capabilities.setCapability("deviceName", "ca65d73d");
//        capabilities.setCapability("deviceName", "emulator-5556");
//        capabilities.setCapability("automationName", "UiAutomator2");
//        capabilities.setCapability("app", getResource("Apps/Copy_of_TrianguloApp.apk").toString());
//
//        return capabilities;
//    }



}
