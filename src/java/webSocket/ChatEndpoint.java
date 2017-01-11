/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package webSocket;

import java.io.IOException;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author lapin
 */
@ServerEndpoint("/chat")
public class ChatEndpoint {
    
    Session session;
    private static Set<Session> sessions = Collections.synchronizedSet(new HashSet<>());


    @OnMessage
    public String onMessage(String message) throws IOException {
       synchronized (sessions) {
            for (Session client : sessions) {
                client.getBasicRemote().sendText(message);
            }
        }
        return null;
    }
    
    @OnOpen
    public void onOpen(Session session) throws IOException {
        //this.session = session;
        sessions.add(session);
    }

    @OnError
    public void onError(Throwable t) {
    }

    @OnClose
    public void onClose(Session session) {
        sessions.remove(session);
    }
    
}
