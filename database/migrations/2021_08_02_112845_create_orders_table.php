<?php

use App\Models\User;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('menu_id')->index();
            $table->unsignedBigInteger('user_id')->index();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('menu_id')->references('id')->on('menus');
            $table->integer('steps');
            $table->boolean('is_active');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
