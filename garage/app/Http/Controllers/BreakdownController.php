<?php

namespace App\Http\Controllers;

use App\Models\Breakdown;
use App\Models\Mechanic;
use App\Models\Truck;
use Illuminate\Http\Request;

class BreakdownController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mechanics = Mechanic::orderBy('surname')->get();
        return view('breakdown.index', [
            'mechanics' => $mechanics,
            'status' => Breakdown::STATUS
        ]);
    }

    public function trucksList(int $mechanicId)
    {
        $trucks = Truck::where('mechanic_id', $mechanicId)->orderBy('plate')->get();
        $html = view('breakdown.trucks_list')->with('trucks', $trucks)->render();
        return response()->json([
            'html' => $html
        ]);
    }

    public function list()
    {
        $breakdowns = Breakdown::orderBy('updated_at', 'desc')->get();
        $html = view('breakdown.list')
        ->with('breakdowns', $breakdowns)
        ->with('status', Breakdown::STATUS)
        ->render();
        return response()->json([
            'html' => $html,
        ]);
    }


    public function store(Request $request)
    {
        $breakdown = new Breakdown;

        $breakdown->truck_id = (int) $request->truck_id;
        $breakdown->title = $request->title;
        $breakdown->notes = $request->notes;
        $breakdown->status = (int) $request->status;
        $breakdown->price = (float) $request->price;
        $breakdown->discount = (float) $request->discount;

        $breakdown->save();

        return response()->json([
            'msg' => 'All good',
            'status' => 'OK'
        ]);

    }


    public function modal(Breakdown $breakdown)
    {
        $html = view('breakdown.modal_content')
        ->with('breakdown', $breakdown)
        ->with('status', Breakdown::STATUS)
        ->render();
        return response()->json([
            'html' => $html,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Breakdown  $breakdown
     * @return \Illuminate\Http\Response
     */
    public function edit(Breakdown $breakdown)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Breakdown  $breakdown
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Breakdown $breakdown)
    {
        $breakdown->truck_id = (int) $request->truck_id;
        $breakdown->title = $request->title;
        $breakdown->notes = $request->notes;
        $breakdown->status = (int) $request->status;
        $breakdown->price = (float) $request->price;
        $breakdown->discount = (float) $request->discount;

        $breakdown->save();

        return response()->json([
            'msg' => 'All good',
            'status' => 'OK'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Breakdown  $breakdown
     * @return \Illuminate\Http\Response
     */
    public function destroy(Breakdown $breakdown)
    {
        $breakdown->delete();
        return response()->json([
            'msg' => 'All good',
            'status' => 'OK',
            'refresh' => 'list'
        ]);
    }

    // public function destroy(int $id)
    // {
    //     Breakdown::where('id', $id)->first()->delete();
    //     return response()->json([
    //         'msg' => 'All good',
    //         'status' => 'OK',
    //         'refresh' => 'list'
    //     ]);
    // }
}
