package com.example.weatherapp;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.provider.FontsContractCompat;

import android.graphics.Typeface;
import android.graphics.fonts.Font;
import android.graphics.fonts.FontFamily;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainActivity2 extends AppCompatActivity {

    private static final String key = "d1ced8681b58e1bf47a01c766879fb2b";
    private static final String url = "http://api.openweathermap.org/";
    private TextView weatherData;
    public static String lat="35";
    public static String lon="139";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        weatherData=findViewById(R.id.textView2);
        findViewById(R.id.button).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                getData();
            }
        });
    }

    private void getData()
    {
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(url)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        OpenweatherAPI.WeatherService service=retrofit.create(OpenweatherAPI.WeatherService.class);
        Call<PostWeather> call=service.getCurrentWeatherData(lat,lon,key);
        call.enqueue(new Callback<PostWeather>() {
            @Override
            public void onResponse(Call<PostWeather> call, Response<PostWeather> response) {
                if(response.code()==200){
                    PostWeather postWeather=response.body();
                    assert postWeather!=null;

                    String ans="Country: "+
                            postWeather.getSys().getCountry()+
                            "\n"+
                            "Temperature; "+
                            (postWeather.getMain().getTemp()-273)+
                            " Celcius"+
                            "\n"+
                            "Humidity: "+
                            postWeather.getMain().getHumidity();
                    weatherData.setText(ans);
                }
            }

            @Override
            public void onFailure(Call<PostWeather> call, Throwable t) {
                weatherData.setText(t.getMessage());
            }
        });
    }
}
