import com.utils.ThreadLocalDriver;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import io.cucumber.java.After;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;

import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Path;
import java.nio.file.Paths;

@CucumberOptions(
        features = {"classpath:features"},
        glue = {"com.trianguloApp"},
        tags = {""},
        plugin = {"html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        })
public class CucumberRunner extends AbstractTestNGCucumberTests {
        @BeforeTest
        public void before(){
                System.out.println("before");
        }

        @BeforeMethod
        @Parameters({"deviceName", "platformName","automationName","appiumUrl"})
        public void setup (String deviceName, String platformName, String automationName,String appiumUrl) throws IOException, URISyntaxException {
                System.out.println("TestNG Before");

                URL server = new URL(appiumUrl);
                ThreadLocalDriver.setTLDriver(getDriver(platformName,getCap(deviceName,platformName,automationName),server));
        }

        @AfterMethod
        public void afterScenario(){
                System.out.println("TestNG After");
                ThreadLocalDriver.getTLDriver().quit();
        }
        public Path getResource(String fileName) throws URISyntaxException {
                URL refImgUrl = getClass().getClassLoader().getResource(fileName);

                return Paths.get(refImgUrl.toURI()).toFile().toPath();
        }
        public AppiumDriver getDriver(String platformName,DesiredCapabilities caps, URL server){
                switch (platformName){
                        case "Android":
                                return new AndroidDriver(server,caps);
                        case "iOS":
                                return new IOSDriver(server,caps);
                        default:
                                Assert.fail("No es valida la plataforma");
                }
                return null;
        }

        public DesiredCapabilities getCap(String deviceName, String platformName, String automationName) throws URISyntaxException {
                DesiredCapabilities capabilities = new DesiredCapabilities();
                capabilities.setCapability("platformName", platformName);
                capabilities.setCapability("deviceName", deviceName);
                capabilities.setCapability("automationName", automationName);
                capabilities.setCapability(MobileCapabilityType.UDID, deviceName);
                capabilities.setCapability("app", getResource("Apps/Copy_of_TrianguloApp.apk").toString());
                return capabilities;
        }


}